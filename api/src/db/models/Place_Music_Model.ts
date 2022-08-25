import { placeDates, placeAvailable } from "../interfaces/place.interfaces";
import { musicDates } from "../interfaces/musicBand.interfaces";

import { getMusicBand } from "./musicBandModel";
import { getPlace } from "./placeModel";

const { model } = require("mongoose");

const musicBandSchema = require("../schemas/musicBandSchema");
const placeSchemaModel = require("../schemas/placeSchema");

const musicBand = model("musicband", musicBandSchema);
const place = model("place", placeSchemaModel);

export const addPendingDate = async (musicEmail: string, placeEmail: string, date: string) => {
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
				},
			);
			await musicBand.updateOne(
				{ email: musicEmail },
				{
					pendingDates: [
						...currentMusicBand.pendingDates,
						{ place: currentPlace.name, date: date },
					],
				},
			);
			return { msg: "Se actualizó correctamente" };
		} else {
			return { error: "No se encontraron los usuarios" };
		}
	} catch (error: any) {
		return { error };
	}
};

export const removePendingDate = async (musicEmail: string, placeEmail: string, date: string) => {
	try {
		const currentMusicBand = await getMusicBand(musicEmail);
		const currentPlace = await getPlace(placeEmail);
		if (currentMusicBand && currentPlace && date) {
			const dateToDelete = currentPlace.pendingDates.find(
				(d: placeDates) => d.date.toISOString().substring(0, 10) === date,
			);
			if (dateToDelete) {
				await place.updateOne(
					{ email: placeEmail },
					{
						pendingDates: currentPlace.pendingDates.filter(
							(e: placeDates) => e.date.toISOString().substring(0, 10) !== date,
						),
					},
				);
				await musicBand.updateOne(
					{ email: musicEmail },
					{
						pendingDates: currentMusicBand.pendingDates.filter(
							(e: musicDates) => e.date.toISOString().substring(0, 10) !== date,
						),
					},
				);
				return { msg: "Se eliminó la fecha correctamente" };
			} else {
				return { msg: "La fecha no existe" };
			}
		} else {
			return { error: "No se encontraron los usuarios" };
		}
	} catch (error: any) {
		return { error };
	}
};

export const confirmedDate = async (musicEmail: string, placeEmail: string, date: string) => {
	try {
		const currentMusicBand = await getMusicBand(musicEmail);
		const currentPlace = await getPlace(placeEmail);
		if (currentMusicBand && currentPlace) {
			await removePendingDate(musicEmail, placeEmail, date);
			await place.updateOne(
				{ email: placeEmail },
				{
					availableDates: currentPlace.availableDates.filter(
						(d: placeAvailable) => d.date.toISOString().substring(0, 10) !== date,
					),
					dates: [...currentPlace.dates, { musicBand: currentMusicBand.name, date: date }],
				},
			);
			await musicBand.updateOne(
				{ email: musicEmail },
				{ dates: [...currentMusicBand.dates, { place: currentPlace.name, date: date }] },
			);
			return { msg: "Fecha matcheada!" };
		} else {
			return { error: "No se encontraron los usuarios" };
		}
	} catch (error: any) {
		return { error };
	}
};
