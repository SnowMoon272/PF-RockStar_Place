import { Request, Response } from "express";

import { addPendingDate, removePendingDate, confirmedDate } from "../db/models/Place_Music_Model";

const addPendingDateController = async (req: Request, res: Response) => {
	let { musicEmail, placeEmail, date } = req.body;
	if (date) {
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
	if (date) {
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

const addConfirmedDateController = async (req: Request, res: Response) => {
	let { musicEmail, placeEmail, date } = req.body;
	if (date) {
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

module.exports = {
	addPendingDateController,
	removePendingDateController,
	addConfirmedDateController,
};
