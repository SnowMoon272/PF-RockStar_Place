const { model } = require("mongoose");
const bcrypt = require("bcrypt");

const musicBandSchema = require("../schemas/musicBand");

const musicBand = model("musicband", musicBandSchema);

interface reviews {
  author: string;
  comment: string;
  rating: number;
}
interface dates {
  author: string;
  place: string;
  date: Date;
}
enum Roles {
  ADMIN = "admin",
  MUSICBAND = "musicband",
  PLACE = "place",
}

type musicBandInterface = {
  personInCharge: string;
  name: string;
  email: string;
  password: string;
  rating: number;
  reviews: reviews[];
  dates: dates[];
  banned: boolean;
  role: Roles;
  socialMedia: any;
  description: string;
  pendingDates: dates[];
  profilePicture: string;
};

export const reloadMusicBandRating = async (email: string) => {
  const userToUpdate = await getMusicBand(email);
  let sum = 0;
  for (let review of userToUpdate.reviews) {
    sum += review.rating;
  }

  sum = Math.round((sum / userToUpdate.reviews.length) * 100) / 100;

  try {
    await musicBand.updateOne({ email }, { rating: sum });
    return { response: "updated" };
  } catch (error) {
    throw new Error("Error updating rating");
  }
};

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
      throw new Error("Error creating a review");
    }
  } else {
    throw new Error("User not found");
  }
};

export const getMusicBand = async (email: string) => {
  try {
    let musicBandResponse = await musicBand.findOne({ email });
    if (musicBandResponse !== undefined) return musicBandResponse;
    else return { error: "User not found" };
  } catch (err: any) {
    throw new Error("An error occurred getting user");
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

export const createMusicBand = async (newMusicBand: musicBandInterface) => {
  newMusicBand.password = await encodePassword(newMusicBand.password);
  newMusicBand.rating = 5;

  console.log("I arrived is in created music band function");

  try {
    await musicBand.create(newMusicBand);
    console.log("New user band created");
  } catch (error: any) {
    console.log(error);
  }
};

export const getAllMusicBands = async () => {
  try {
    const allMusicBands = await musicBand.find(
      {},
      { email: 1, name: 1, rating: 1, description: 1 },
    );
    return allMusicBands;
  } catch (error) {
    throw new Error("Error getting all music bands ");
  }
};

export const banHandler = async (email: string) => {
  try {
    const userToChange = await musicBand.findOne({ email });
    userToChange.banned === false
      ? await musicBand.updateOne({ email }, { banned: true })
      : await musicBand.updateOne({ email }, { banned: false });
  } catch (error) {
    console.log("Something went wrong in ban function");
  }
};
