const { model } = require('mongoose');
const bcrypt = require('bcrypt');

const musicBandSchema = require('../schemas/musicBand');

const musicBand = model('musicband', musicBandSchema);

interface reviews {
    comment:string,
    rating: number
}
interface dates {
    place: string,
    date: Date
}

type musicBandInterface = {
    personInCharge : string,
    name:string,
    email:string,
    password: string,
    rating: number
    reviews: reviews[],
    dates: dates[],
    banned: boolean,
    role: "admin" | "musicband" | "place"
}

const encodePassword = async (password : string) => {
    const salt = await bcrypt.genSalt(6);
    const encodedPassword = await bcrypt.hash(password, salt);
    return encodedPassword;
}


export const createMusicBand = async(newMusicBand : musicBandInterface) => {
    newMusicBand.password = await encodePassword(newMusicBand.password);
    newMusicBand.rating = 5;

    console.log('Llegó a la función crear');


    try {
        await musicBand.create(newMusicBand);
        console.log('Creó el nuevo user desde el back :O');
    } catch (error : any) {
        console.log(error);
    }

}

export const getAllMusicBands = async () => {
    const allMusicBands = await musicBand.find();
    return allMusicBands;
}

export const banHandler = async (email : string) => {
    try {
        const userToChange = await musicBand.findOne({email});
        userToChange.banned === false ?
        await musicBand.updateOne({email}, {banned : true}) :
        await musicBand.updateOne({email}, {banned : false});

    } catch (error) {
        console.log('Something went wrong in ban function');
    }
    // const numberOfChanges = musicBand.update({_id : id})
}

module.exports = {
    createMusicBand,
    getAllMusicBands,
    banHandler
};