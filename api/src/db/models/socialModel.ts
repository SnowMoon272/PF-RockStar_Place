const { model } = require("mongoose");
const socialSchema = require("../schemas/socialSchema.ts");
import { musicRoles } from "../interfaces/musicBand.interfaces";
const { createMusicBand } = require("./musicBandModel.ts");
const { createPlace } = require("./placeModel.ts");

export const socialUser = new model('socialuser', socialSchema);

export const getSocialUserInfo = async () => {
  try {
    const info = socialUser.findOne();
    return info;
  } catch (error) {
    console.log(error);
  }
};

interface socialUserI {
  email: string,
  profilePicture: string,
  personInCharge: string,
  role: string
}

export const createSocialUser = async (newSocialUser: socialUserI) => {
  newSocialUser.role = "social";
  try {
    let created = await socialUser.create(newSocialUser);
    return created;
  } catch (error) {
    return {error : "user not created"}
  }
};

export const switchToMusicBand = async (email: string) => {
  console.log(`Hola, me invocaron: ${email}`);
  
  if(!email) return false;
  try {
    let userToSwitch = await socialUser.findOne({email});
    const newMusicBand = {
      personInCharge: userToSwitch.personInCharge,
      name: "",
      email: userToSwitch.email,
      password: userToSwitch.email,
      rating: 5,
      role: musicRoles.MUSICBAND,
      description: "",
      profilePicture: userToSwitch.profilePicture,
      phoneNumber: "",
    };
    console.log(newMusicBand);
    
    const response = await createMusicBand(newMusicBand);
    await socialUser.deleteOne({email});
    console.log(`Respuesta: ${response}`);
    
    return response;
  } catch (error) {
    return {error : "Error switching"};
  }
}

export const switchToPlace = async (email: string) => {
  console.log(`Hola, me invocaron: ${email}`);

  if(!email) return false;
  try {
    console.log("Estoy en el try");
    
    let userToSwitch = await socialUser.findOne({email});

    const newPlace = {
      personInCharge: userToSwitch.personInCharge,
      name: "",
      email: userToSwitch.email,
      password: userToSwitch.email,
      rating: 5,
      role: musicRoles.PLACE,
      description: "",
      profilePicture: userToSwitch.profilePicture,
      phoneNumber: "",
    };
    console.log(newPlace);

    
    const response = await createPlace(newPlace);
    await socialUser.deleteOne({email});
    console.log(`Respuesta: ${response}`);
    return response;
  } catch (error) {
    console.log(error);
    
    return {error : "Error switching"};
  }
}