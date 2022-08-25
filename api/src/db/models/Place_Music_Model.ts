import {
	musicReviews,
	musicDates,
	musicRoles,
	musicBandInterface,
} from "../interfaces/musicBand.interfaces";

import {
	placeReviews,
	placeDates,
	placeAvailable,
	placeInterface,
	placeRoles,
} from "../interfaces/place.interfaces";

import { getMusicBand } from "./musicBandModel";
import { getPlace } from "./placeModel";

const { model } = require("mongoose");

const musicBandSchema = require("../schemas/musicBandSchema");

const musicBand = model("musicband", musicBandSchema);

const placeSchemaModel = require("../schemas/placeSchema");

const place = model("place", placeSchemaModel);

export const addPendingDate = async (
	musicEmail: string,
	placeEmail: string,
	date: Date
) => {
	try {
		const musicAddDate = await getMusicBand(musicEmail);
		const placeAddDate = await getPlace(placeEmail);
		if (musicAddDate && placeAddDate) {
			const pendingDatesPlace = placeAddDate.pendingDates;
			const pendingDatesMusic = musicAddDate.pendingDates;
			pendingDatesPlace.push({
				musicBand: musicAddDate.name,
				date: date,
			});
			pendingDatesMusic.push({
				place: placeAddDate.name,
				date: date,
			});
			console.log(pendingDatesPlace);
			await place.updateOne(
				{ placeEmail },
				{
					pendingDates: pendingDatesPlace,
				}
			);
			console.log(pendingDatesMusic);
			await musicBand.updateOne(
				{ musicEmail },
				{
					pendingDates: pendingDatesMusic,
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
