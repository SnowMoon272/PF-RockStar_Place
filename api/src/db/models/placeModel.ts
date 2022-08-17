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
  author: string;
  musicBand: string;
  date: Date;
}

enum Roles {
  ADMIN = "admin",
  MUSICBAND = "musicband",
  PLACE = "place",
}

type placeInterface = {
  capacity: String;
  name: string;
  city: string;
  adress: string;
  password: string;
  rating: number;
  description: string;
  reviews: reviews[];
  dates: dates[];
  socialMedia: any;
  pendingDates: dates[];
  profilePicture: String;
  banned: boolean;
  role: Roles;
};

export const getAllPlaces = async () => {
  try {
    const allPlaces = await place.find({}, { email: 1, name: 1, rating: 1, description: 1 });
    return allPlaces;
  } catch (error) {
    throw new Error("Error getting all places ");
  }
};

export const getPlace = async (email: string) => {
  try {
    let placeResponse = await place.findOne({ email });
    if (placeResponse !== undefined) return placeResponse;
    else return { error: "user not found" };
  } catch (err: any) {
    throw new Error("An error occurred getting the place");
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
    console.log("Rating updated");
  } catch (error) {
    throw new Error("Error updating rating");
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
      throw new Error("Error creating a review");
    }
  } else {
    throw new Error("User not found");
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

  try {
    await place.create(newPlace);
    console.log("New user place created");
  } catch (error: any) {
    console.log(error);
  }
};

export const banHandler = async (email: string) => {
  try {
    const userToChange = await place.findOne({ email });
    userToChange.banned === false
      ? await place.updateOne({ email }, { banned: true })
      : await place.updateOne({ email }, { banned: false });
  } catch (error) {
    console.log("Something went wrong in ban function");
  }
};

export const filterByCity = async (city: string) => {
  try {
    let cityPlaces = await place.find({ city });
    if (cityPlaces !== undefined) {
      return cityPlaces;
    } else {
      return { error: "There are no places in this location" };
    }
  } catch (err: any) {
    throw new Error("Something went wrong");
  }
};