import { getMusicBand } from "./musicBandModel";
import { getPlace } from "./placeModel";

const { model } = require("mongoose");

const musicBandSchema = require("../schemas/musicBandSchema");
const placeSchemaModel = require("../schemas/placeSchema");

const musicBand = model("musicband", musicBandSchema);
const place = model("place", placeSchemaModel);

export const addPendingDate = async (
	musicEmail: string,
	placeEmail: string,
	date: Date
) => {
	try {
		const currentMusicBand = await getMusicBand(musicEmail);
		const currentPlace = await getPlace(placeEmail);
		if (currentMusicBand && currentPlace) {
			await place.updateOne(
				{ email: placeEmail },
				{
					pendingDates: [
						...currentPlace.pendingDates,
						{ musicBand: currentMusicBand.name, date: date },
					],
				}
			);
			await musicBand.updateOne(
				{ email: musicEmail },
				{
					pendingDates: [
						...currentMusicBand.pendingDates,
						{ place: currentPlace.name, date: date },
					],
				}
			);
			return { msg: "Se actualizó correctamente" };
		} else {
			return { error: "No se encontraron los usuarios" };
		}
	} catch (error: any) {
		return { error };
	}
};

export const removePendingDate = async (
	musicEmail: string,
	placeEmail: string,
	date: Date
) => {
	try {
		const currentMusicBand = await getMusicBand(musicEmail);
		const currentPlace = await getPlace(placeEmail);
		if (currentMusicBand && currentPlace && date) {
			await place.updateOne(
				{ email: placeEmail },
				{
					pendingDates: [
						currentPlace.pendingDates.filter((e: Date) => e !== date),
					],
				}
			);
			await musicBand.updateOne(
				{ email: musicEmail },
				{
					pendingDates: [
						currentMusicBand.pendingDates.filter((e: Date) => e !== date),
					],
				}
			);
			return { msg: "Se eliminó la fecha correctamente" };
		} else {
			return { error: "No se encontraron los usuarios" };
		}
	} catch (error: any) {
		return { error };
	}
};

/* 
export const confirmedDate = async (musicEmail: string, placeEmail: string, date: Date) => {
	try {
		const currentMusicBand = await getMusicBand(musicEmail);
		const currentPlace = await getPlace(placeEmail);
		if (currentMusicBand && currentPlace) {
		} else {
			return { error: "No se encontraron los usuarios" };
		}
	} catch (error: any) {
		return { error };
	}
}; */
