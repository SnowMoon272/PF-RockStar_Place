const { model } = require("mongoose");
const bcrypt = require("bcrypt");

const placeSchemaModel = require("../schemas/placeSchema");

const place = model("place", placeSchemaModel);

interface reviews {
  author: string;
  comment: string;
  rating: number;
}

interface dates {
  musicBand: string;
  date: Date;
}
interface available {
  isAvailable: boolean;
  date: Date;
}

enum Roles {
  ADMIN = "admin",
  MUSICBAND = "musicband",
  PLACE = "place",
}

type placeInterface = {
  capacity: string;
  name: string;
  email: string;
  password: string;
  hasSound: boolean;
  city: string;
  adress: string;
  rating: number;
  description: string;
  reviews: reviews[];
  dates: dates[];
  availableDates: available[];
  socialMedia: any;
  pendingDates: dates[];
  profilePicture: string;
  banned: boolean;
  role: Roles;
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

export const getAllPlaces = async (city?: string, sound?: string) => {
  try {
    if (!city && !sound) {
      let response = await place.find(
        {},
        { city: 1, email: 1, name: 1, rating: 1, profilePicture: 1, hasSound: 1 },
      );
      return response;
    } else if (city && !sound) {
      let response = await place.find(
        { city },
        { city: 1, email: 1, name: 1, rating: 1, profilePicture: 1, hasSound: 1 },
      );
      return response;
    } else if (!city && sound) {
      let hasSound = sound === "sonidoSi" ? true : false;
      let response = await place.find(
        { hasSound },
        { city: 1, email: 1, name: 1, rating: 1, profilePicture: 1, hasSound: 1 },
      );
      return response;
    } else if (city && sound) {
      let hasSound = sound === "sonidoSi" ? true : false;
      let response = await place.find(
        { city, hasSound },
        { city: 1, email: 1, name: 1, rating: 1, profilePicture: 1, hasSound: 1 },
      );
      return response;
    }
  } catch (error) {
    return {error}
  }
};

export const getPlace = async (email: string) => {
  try {
    let placeResponse = await place.findOne({ email }, { password: 0 });
    if (placeResponse !== undefined) return placeResponse;
    else return { error: "user not found" };
  } catch (error: any) {
    return { error };
  }
};

export const getPlaceByID = async (id: string) => {
  try {
    let placeResponse = await place.findOne({ _id : id }, { password: 0 });
    if (placeResponse !== undefined) return placeResponse;
    else return { error: "place not found" };
  } catch (error: any) {
    return { error };
  }
};

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

const encodePassword = async (password: string) => {
  const salt = await bcrypt.genSalt(6);
  const encodedPassword = await bcrypt.hash(password, salt);
  return encodedPassword;
};

const comparePassword = async (password: string, encodedPassword: string) => {
  let valid = await bcrypt.compare(password, encodePassword);
  return valid;
};

export const createPlace = async (newPlace: placeInterface) => {
  newPlace.password = await encodePassword(newPlace.password);
  newPlace.rating = 5;
  newPlace.role = Roles.PLACE;
  newPlace.banned = false;

  try {
    await place.create(newPlace);
    return await place.findOne({ email: newPlace.email });
  } catch (error: any) {
    return { error };
  }
};

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
