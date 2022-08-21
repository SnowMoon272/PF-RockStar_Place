import { Request, Response } from "express";
import {
	addBandReview,
	createMusicBand,
	getAllMusicBands,
	getMusicBand,
} from "../db/models/musicBandModel";

const getAllBandsController = async (req: Request, res: Response) => {
	try {
		const musicBands = await getAllMusicBands();
		if (musicBands) {
			return res.status(200).send(musicBands);
		} else {
			return res.status(404).send({
				msg: "Bands not found",
			});
		}
	} catch (error) {
		return res.status(500).send({ error: "Something went wrong" });
	}
};

const createMusicBandController = async (req: any, res: any) => {
	const musicBand = req.body.newMusicBand;
	if (musicBand) {
		try {
			await createMusicBand(musicBand);
			res.status(201).send({ msg: "Se creo la banda exitosamente" });
		} catch (error) {
			return res.status(404).send({ error: "Something went wrong" });
		}
	} else {
		res.status(400).send({ msg: "Data faltante o incorrecta" });
	}
};

const addBandReviewController = async (req: Request, res: Response) => {
	const { review, email } = req.body;

	if (review && email) {
		try {
			await addBandReview(email, review);
			return res.status(201).send({ msg: "Se añadio la reseña exitosamente" });
		} catch (error) {
			return res.status(500).send({ error: "Something went wrong" });
		}
	} else {
		return res.status(404).send({ msg: "Data faltante o incorrecta" });
	}
};

const getMusicBandController = async (req: any, res: any) => {
	const { email } = req.body;
	if (email) {
		try {
			const musicBand = await getMusicBand(email);
			if (musicBand) {
				return res.status(200).send(musicBand);
			} else {
				return res.status(404).send({
					msg: "No se encontraron bandas",
				});
			}
		} catch (error) {
			return res.status(500).send({ error: "Something went wrong" });
		}
	} else return res.status(404).send({ error: "Invalid data" });
};

module.exports = {
	getAllBandsController,
	createMusicBandController,
	addBandReviewController,
	getMusicBandController,
};
