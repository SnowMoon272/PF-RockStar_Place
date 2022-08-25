import { reviews, dates, available, placeInterface, Roles } from "../interfaces/place.interfaces";
const { model } = require("mongoose");
const bcrypt = require("bcrypt");

const placeSchemaModel = require("../schemas/placeSchema");

const place = model("place", placeSchemaModel);

const PLACES_REQUIRED_INFO = {
	city: 1,
	email: 1,
	name: 1,
	rating: 1,
	profilePicture: 1,
	hasSound: 1,
};

/**
 *	deletePlace es una función utilizada para los tests, no es implementada de ninguna manera en las rutas
 *
 *	@param {string} email Recibe por paramentro el email del lugar que se quiere eliminar de la base de datos
 *	@return {object} Retorna un objeto con la respuesta si se elimino el objeto de la base de datos
 *  @author Sebastian Pérez <https://github.com/Sebastian-pz>
 */
export const deletePlace = async (email: string) => {
	try {
		const deleted = await place.deleteOne({ email });
		return deleted;
	} catch (error) {
		return { error };
	}
};

/**
 * getAllPlaces es la función encargada de retornar los locales filtrados, según el parámetro que reciba,
 * o todos, si no recibe ningún parámetro
 * @param {string} city Recibe por parametro la ciudad en la que se quiere buscar locales (puede o no estar)
 * @param {string} sound Recibe por parametro el string "sonidoSi" o "sonidoNo", según el filtrado que desee (puede o no estar)
 * @returns {array} Retorna un arreglo de objetos filtrados con los campos requeridos.
 * @author Sebastian Pérez, Matías Straface, Carlos Laprida.
 */

export const getAllPlaces = async (city?: string, sound?: string) => {
	try {
		if (!city && !sound) return await getAll();
		if (city && !sound) return await getPlacesByCity(city);
		if (!city && sound) return await getPlacesBySound(sound);
		if (city && sound) return await getPlacesByCityAndSound(city, sound);
	} catch (error) {
		return { error };
	}
};

const getAll = async () => {
	return await place.find({}, PLACES_REQUIRED_INFO);
};
const getPlacesByCity = async (city: string) => {
	return await place.find({ city }, PLACES_REQUIRED_INFO);
};
const getPlacesBySound = async (sound: string) => {
	let filter = sound === "sonidoSi" ? { hasSound: true } : { hasSound: false };
	return await place.find(filter, PLACES_REQUIRED_INFO);
};
const getPlacesByCityAndSound = async (city: string, sound: string) => {
	let filter =
		sound === "sonidoSi" ? { city: city, hasSound: true } : { city: city, hasSound: false };
	return await place.find(filter, PLACES_REQUIRED_INFO);
};

/**
 * getPlace es la función encargada de retornar la información completa de un local según su email.
 * @param {string} email recibe por parámetro el email del local que se requiere.
 * @returns {object} retorna un objeto con sus campos, excepto el password, o un error si no se encuentra el local.
 * @author Sebastian Pérez <https://github.com/Sebastian-pz>
 */
export const getPlace = async (email: string) => {
	try {
		let placeResponse = await place.findOne({ email }, { password: 0 });
		if (placeResponse !== undefined) return placeResponse;
		else return { error: "user not found" };
	} catch (error: any) {
		return { error };
	}
};

/**
 * getPlaceByID es la función encargada de retornar la información completa de un local segun su ID.
 * @param {string} id recibe por parámetro el id del local que se requiere.
 * @returns {object} retorna un objeto con sus campos, excepto en password, o un error si no encuentra el local.
 * @author Sebastian Pérez <https://github.com/Sebastian-pz>
 */
export const getPlaceByID = async (id: string) => {
	try {
		let placeResponse = await place.findOne({ _id: id }, { password: 0 });
		if (placeResponse !== undefined) return placeResponse;
		else return { error: "place not found" };
	} catch (error: any) {
		return { error };
	}
};

/**
 * reloadPlaceRating es la función encargada de actualizar el rating de un local,
 * se ejecuta después de enviar una review.
 * @param {string} email recibe como parámetro el email del local a actualizar.
 * @returns {error} retorna un error en caso de que no se haya podido actualizar el rating.
 * @author Sebastian Pérez <https://github.com/Sebastian-pz>
 */
export const reloadPlaceRating = async (email: string) => {
	const userToUpdate = await getPlace(email);
	let sum = 0;
	for (let review of userToUpdate.reviews) {
		sum += review.rating;
	}
	sum = Math.round((sum / userToUpdate.reviews.length) * 100) / 100;

	try {
		await place.updateOne({ email }, { rating: sum });
	} catch (error) {
		return { error };
	}
};

/**
 * addPlaceReview es la función encargada de añadirle una review a un local en particular.
 * @param {string} email recibe como parámetro el email del local al que se quiere evaluar.
 * @param {object} review recibe como parámetro un objeto con las siguientes propiedades: review : { author : String, comment : String, rating : Number}
 * @returns {object} retorna todas las reviews del local.
 * @author Sebastian Pérez <https://github.com/Sebastian-pz>
 */
export const addPlaceReview = async (email: string, review: reviews) => {
	const userToAddReview = await getPlace(email);

	if (userToAddReview) {
		let previousReviews = userToAddReview.reviews;
		previousReviews.push(review);
		try {
			await place.updateOne({ email }, { reviews: previousReviews });
			await reloadPlaceRating(email);
			return { reviews: previousReviews };
		} catch (error) {
			return { error };
		}
	} else {
		return { error: "Place not found" };
	}
};

/**
 * EncodePassword es la función encargada de encriptar la contraseña del usuario, que le llega a {createPlace()} por parametro.
 * @param {string} contraseña Recibe por parametro la contraseña a ser encriptada
 * @return {string} Retorna la contraseña del usuario encriptada
 * @author Sebastian Pérez <https://github.com/Sebastian-pz>
 */
const encodePassword = async (password: string) => {
	const salt = await bcrypt.genSalt(6);
	const encodedPassword = await bcrypt.hash(password, salt);
	return encodedPassword;
};

/**
 * comparePassword es la función encargada de comparar una contraseña encriptada de la base de datos con una contraseña no encriptada aún
 *
 * @param {string} contraseña Recibe por parametro la contraseña no encriptada para comparar
 * @param {string} contraseñaEncriptada Recibe por parametro la contraseña encriptada para comparar
 * @return {boolean} Retorna un valor de true si las contraseñas matchean o false en el caso de que no
 * @author Sebastian Pérez <https://github.com/Sebastian-pz>
 */
const comparePassword = async (password: string, encodedPassword: string) => {
	let valid = await bcrypt.compare(password, encodePassword);
	return valid;
};

/**
*	createPlace es la función encargada de registrar una nueva banda en la base de datos
*
*	@param {newPlace} newPlace Recibe por parametro un objeto de tipo place : {
		personInCharge,
		name,
		email,
		password
	}
*	@return {object} Retorna el nuevo local.
* @author Sebastian Pérez <https://github.com/Sebastian-pz>
*/
export const createPlace = async (newPlace: placeInterface) => {
	newPlace.password = await encodePassword(newPlace.password);
	newPlace.rating = 5;
	newPlace.role = Roles.PLACE;
	newPlace.banned = false;

	try {
		let created = await place.create(newPlace);
		return created;
	} catch (error: any) {
		return { error };
	}
};

/**
 * banHandler es la función encargada de bloquear o desbloquear en nuestra base de datos
 *
 * @param {email} email recibe por parametro el email de la cuenta que será bloqueada o desbloqueda
 * @return {object} Retorna el usuario modificado
 * @author Sebastian Pérez <https://github.com/Sebastian-pz>
 */
export const banHandler = async (email: string) => {
	try {
		const userToChange = await place.findOne({ email });
		userToChange.banned === false
			? await place.updateOne({ email }, { banned: true })
			: await place.updateOne({ email }, { banned: false });
	} catch (error) {
		return { error };
	}
};

export const getPlaceByName = async (search: string) => {
	try {
		let placeResponse = await place.find({ name: { $regex: search, $options: "i" } });
		if (placeResponse !== undefined) return placeResponse;
		else return { error: "place not found" };
	} catch (error) {
		return { error };
	}
};

export const getCities = async () => {
	try {
		const allCities = await place.find({}, { city: 1 }).distinct("city");
		return allCities;
	} catch (error) {
		return { error };
	}
};

export const addDate = async (email: string, date: Date) => {
	try {
		const placeToAddDate = await place.findOne({ email });
		if (placeToAddDate) {
			const allDates = [...placeToAddDate.dates, ...placeToAddDate.availableDates];
			const repeatedDate = allDates.find((d) => d.date.toISOString().substring(0, 10) === date);

			if (repeatedDate) return { error: "La fecha ya está cargada." };
			allDates.push({
				date: date,
				isAvailable: true,
			});

			await place.updateOne({ email }, { availableDates: allDates });
			return await place.findOne({ email });
		} else return { error: "User does not exist." };
	} catch (error: any) {
		return { error };
	}
};

export const deleteDate = async (email: string, date: Date) => {
	try {
		const placeToDeleteDate = await place.findOne({ email });
		if (placeToDeleteDate) {
			const allDates = [...placeToDeleteDate.dates, ...placeToDeleteDate.availableDates];
			const dates = allDates.filter((d) => d.date.toISOString().substring(0, 10) !== date);
			if (
				placeToDeleteDate.dates
					.map((d: dates) => d.date.toISOString().substring(0, 10))
					.includes(date)
			) {
				await place.updateOne({ email }, { dates: dates });
				return { msg: "Fecha eliminada correctamente." };
			}
			if (
				placeToDeleteDate.availableDates
					.map((d: available) => d.date.toISOString().substring(0, 10))
					.includes(date)
			) {
				await place.updateOne({ email }, { availableDates: dates });
				return { msg: "Fecha eliminada correctamente." };
			}
			return { error: "La fecha no existe." };
		} else return { error: "User does not exist." };
	} catch (error: any) {
		return { error };
	}
};
