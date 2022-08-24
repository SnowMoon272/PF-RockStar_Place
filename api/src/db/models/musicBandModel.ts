import { newMusicBand } from "../../tests/musicbandTests/create.musicBand.test";
import { reviews, dates, Roles, musicBandInterface } from "../interfaces/musicBand.interfaces";
const { model } = require("mongoose");
const bcrypt = require("bcrypt");

const musicBandSchema = require("../schemas/musicBandSchema");

const musicBand = model("musicband", musicBandSchema);

/**
 *	reloadMusicBandRating es la función encargada de actualizar el rating general de una banda de música, se ejecuta después de añadir una review
 *
 *	@param {string} email Recibe por paramentro el email de la banda a la que se le va a actualizar el rating
 *	@return {object} Retorna un objeto con {response : updated}
 *  @author Sebastian Pérez <https://github.com/Sebastian-pz>
 */
export const reloadMusicBandRating = async (email: string) => {
	const userToUpdate = await getMusicBand(email);
	let sum = 0;
	for (let review of userToUpdate.reviews) {
		sum += review.rating;
	}

	sum = Math.round((sum / userToUpdate.reviews.length) * 100) / 100;

	try {
		await musicBand.updateOne({ email }, { rating: sum });
		return { response: "Updated" };
	} catch (error) {
		return { error };
	}
};

/**
 *	deleteMusicBand es una función utilizada para los tests, no es implementada de ninguna manera en las rutas
 *
 *	@param {string} email Recibe por paramentro el email de la banda que se quiere eliminar de la base de datos
 *	@return {object} Retorna un objeto con la respuesta si se elimino el objeto de la base de datos
 *  @author Sebastian Pérez <https://github.com/Sebastian-pz>
 */
export const deleteMusicBand = async (email: string) => {
	try {
		const deleted = await musicBand.deleteOne({ email });
		return deleted;
	} catch (error) {
		return { error };
	}
};

/**
 *	addReview es la función encargada de añadirle una review a una banda de música
 *
 *	@param {string} email Recibe por paramentro el email de la banda a la que se le va a añadir el review
 *	@param {object} review Recibe por paramentro un objeto con las siguientes propiedades: review : { author : String, comment : String, rating : Number}
 *	@return {object} Retorna todos los reviews de la banda
 * @author Sebastian Pérez <https://github.com/Sebastian-pz>
 */
export const addBandReview = async (email: string, review: reviews) => {
	const userToAddReview = await getMusicBand(email);

	if (userToAddReview) {
		let previousReviews = userToAddReview.reviews;
		previousReviews.push(review);
		try {
			await musicBand.updateOne({ email }, { reviews: previousReviews });
			await reloadMusicBandRating(email);
			return { reviews: previousReviews };
		} catch (error) {
			return { error };
		}
	} else {
		return { error: "User not found" };
	}
};

/**
 *	getMusicBand es la función encargada de buscar una banda de música por su email
 *
 *	@param {string} email Recibe por parametro el email de la banda que se quiere buscar en la base de datos
 *	@return {object} Retorna la banda de música que conincida con el correo o error si no encuentra la banda
 * @author Sebastian Pérez <https://github.com/Sebastian-pz>
 */
export const getMusicBand = async (email: string) => {
	try {
		let musicBandResponse = await musicBand.findOne({ email }, { password: 0 });
		if (musicBandResponse !== undefined) return musicBandResponse;
		else return { error: "User not found" };
	} catch (error: any) {
		return { error };
	}
};

export const getMusicBandByID = async (id: string) => {
	try {
		let musicBandResponse = await musicBand.findOne({ _id: id }, { password: 0 });
		if (musicBandResponse !== undefined) return musicBandResponse;
		else return { error: "Musicband not found" };
	} catch (error: any) {
		return { error };
	}
};

/**
 *	EncodePassword es la función encargada de encriptar la contraseña del usuario, que le llega {createMusicBand()} por parametro
 *
 *	@param {string} contraseña Recibe por parametro la contraseña a ser encriptada
 *	@return {string} Retorna la contraseña del usuario encriptada
 * @author Sebastian Pérez <https://github.com/Sebastian-pz>
 */
const encodePassword = async (password: string) => {
	const salt = await bcrypt.genSalt(6);
	const encodedPassword = await bcrypt.hash(password, salt);
	return encodedPassword;
};

/**
 *	comparePassword es la función encargada de comparar una contraseña encriptada de la base de datos con una contraseña no encriptada aún
 *
 *	@param {string} contraseña Recibe por parametro la contraseña no encriptada para comparar
 *	@param {string} contraseñaEncriptada Recibe por parametro la contraseña encriptada para comparar
 *	@return {boolean} Retorna un valor de true si las contraseñas matchean o false en el caso de que no
 * @author Sebastian Pérez <https://github.com/Sebastian-pz>
 */
const comparePassword = async (password: string, encodedPassword: string) => {
	let valid = await bcrypt.compare(password, encodePassword);
	return valid;
};

/**
*	createMusicBand es la función encargada de registrar una nueva banda en la base de datos
*
*	@param {newMusicBand} newMusicBand Recibe por parametro un objeto de tipo musicBand : {
		personInCharge,
		name,
		email,
		password
	}
*	@return {object} Retorna la nueva banda de música
* @author Sebastian Pérez <https://github.com/Sebastian-pz>
*/
export const createMusicBand = async (newMusicBand: musicBandInterface) => {
	newMusicBand.password = await encodePassword(newMusicBand.password);
	newMusicBand.rating = 5;
	newMusicBand.role = Roles.MUSICBAND;

	try {
		let created = await musicBand.create(newMusicBand);
		return created;
	} catch (error: any) {
		return { error: "An error occurred getting user" };
	}
};

/**
 *	GetAllMusicBands es la función encargada de hacer la consulta a la base de datos sobre todas las bandas registradas
 *
 *	@param {undefined} none no recibe ningún parametro
 *	@return {[]} Retorna la lista de todas las bandas registradas en la base de datos
 * @author Sebastian Pérez <https://github.com/Sebastian-pz>
 */
export const getAllMusicBands = async () => {
	try {
		const allMusicBands = await musicBand.find(
			{},
			{ _id: 1, email: 1, name: 1, rating: 1, description: 1 },
		);
		return allMusicBands;
	} catch (error: any) {
		return { error };
	}
};

/**
 *	banHandler es la función encargada de bloquear o desbloquear en nuestra base de datos
 *
 *	@param {email} email recibe por parametro el email de la cuenta que será bloqueada o desbloqueda
 *	@return {object} Retorna el usuario modificado
 * @author Sebastian Pérez <https://github.com/Sebastian-pz>
 */
export const banHandler = async (email: string) => {
	try {
		const userToChange = await musicBand.findOne({ email });
		userToChange.banned === false
			? await musicBand.updateOne({ email }, { banned: true })
			: await musicBand.updateOne({ email }, { banned: false });
		return musicBand.findOne({ email });
	} catch (error: any) {
		return { error };
	}
};

export const updateMusicBand = async (email: string, data: musicBandInterface) => {
	try {
		const userToChange = await musicBand.findOne({ email });
		if (userToChange) {
			await musicBand.updateOne(
				{ email },
				{
					personInCharge: data.personInCharge,
					name: data.name,
					description: data.description,
					profilePicture: data.profilePicture,
					phoneNumber: data.phoneNumber,
					socialMedia: {
						instagram: data.socialMedia.instagram,
						youtube: data.socialMedia.youtube,
						spotify: data.socialMedia.spotify,
					},
					/* socialMedia: data.socialMedia.instagram,
					youtube: data.socialMedia.youtube,
					spotify: data.socialMedia.spotify, */
				},
			);
			return musicBand.findOne({ email });
		} else {
			return { error: "User does not exist." };
		}
	} catch (error: any) {
		return { error };
	}
};
