import { getEmailsMusicBand } from "../db/models/musicBandModel";
import { getEmailsPlaces } from "../db/models/placeModel";

import {
	addPendingDate,
	removePendingDate,
	confirmedDate,
	removeConfirmedDate,
	getPlaceOrMusicBandByName,
} from "../db/models/placeMusicModel";

const addPendingDateController = async (req: any, res: any) => {
	let { musicEmail, placeEmail, date } = req.body;
	if (musicEmail && placeEmail && date) {
		try {
			let pendingDate = await addPendingDate(musicEmail, placeEmail, date);
			if (!pendingDate.hasOwnProperty("error")) return res.status(201).send(pendingDate.msg);
			return res.status(404).send(pendingDate.error);
		} catch (error) {
			return res.status(500).send({ error: "No se pudo actualizar" });
		}
	} else {
		res.status(404).send({ msg: "Data faltante o incorrecta" });
	}
};

const removePendingDateController = async (req: any, res: any) => {
	let { musicEmail, placeEmail, date } = req.body;
	if (musicEmail && placeEmail && date) {
		try {
			let pendingDate = await removePendingDate(musicEmail, placeEmail, date);
			if (!pendingDate.hasOwnProperty("error")) return res.status(201).send(pendingDate.msg);
			return res.status(404).send(pendingDate.error);
		} catch (error) {
			return res.status(500).send({ error: "No se pudo actualizar" });
		}
	} else {
		res.status(404).send({ msg: "Data faltante o incorrecta" });
	}
};

const removeConfirmedDateController = async (req: any, res: any) => {
	let { musicEmail, placeEmail, date } = req.body;
	if (musicEmail && placeEmail && date) {
		try {
			let confirmedDate = await removeConfirmedDate(musicEmail, placeEmail, date);
			if (!confirmedDate.hasOwnProperty("error")) return res.status(201).send(confirmedDate.msg);
			return res.status(404).send(confirmedDate.error);
		} catch (error) {
			return res.status(500).send({ error: "No se pudo actualizar" });
		}
	} else {
		res.status(404).send({ msg: "Data faltante o incorrecta" });
	}
};

const addConfirmedDateController = async (req: any, res: any) => {
	let { musicEmail, placeEmail, date } = req.body;
	if (musicEmail && placeEmail && date) {
		try {
			let pendingDate = await confirmedDate(musicEmail, placeEmail, date);
			if (!pendingDate.hasOwnProperty("error")) return res.status(201).send(pendingDate.msg);
			return res.status(404).send(pendingDate.error);
		} catch (error) {
			return res.status(500).send({ error: "No se pudo actualizar" });
		}
	} else {
		res.status(404).send({ msg: "Data faltante o incorrecta" });
	}
};

const getEmailsController = async (req: any, res: any) => {
	try {
		let emailsPlaces = await getEmailsPlaces();
		let emailsMusicBands = await getEmailsMusicBand();
		let allEmails = emailsPlaces.concat(emailsMusicBands);
		res.send(allEmails);
	} catch (error) {
		return res.status(500).send({ error: "Something went wrong" });
	}
};

const getPlaceOrMusicBandByNameController = async (req: any, res: any) => {
	let { search } = req.query;
	if (!search) return res.status(404).send({ message: "Invalid data" });
	search = decodeURI(search);
	try {
		const searchMusicOrPlace = await getPlaceOrMusicBandByName(search);
		return res.status(200).send(searchMusicOrPlace);
	} catch (error) {
		return res.status(500).send({ error: "Something went wrong" });
	}
};

module.exports = {
	addPendingDateController,
	removePendingDateController,
	removeConfirmedDateController,
	addConfirmedDateController,
	getEmailsController,
	getPlaceOrMusicBandByNameController,
};
