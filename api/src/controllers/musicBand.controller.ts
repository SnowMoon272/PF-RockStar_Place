import {
	addBandReview,
	createMusicBand,
	getAllMusicBands,
	getMusicBand,
	getMusicBandByID,
	updateMusicBand,
	disabledMusicBand,
	banHandler,
} from "../db/models/musicBandModel";
import {
	removeConfirmedDate,
	removePendingDate,
} from "../db/models/placeMusicModel";

import {
	deleteAllNotifications,
	sendNotification,
	switchNew,
	getNotifications,
	deleteOne,
} from "../db/models/inter.model";

import { musicBand } from "../db/models/musicBandModel";

const getAllBandsController = async (req: any, res: any) => {
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

const updateMusicBandController = async (req: any, res: any) => {
	const { email, data } = req.body;
	if (data) {
		try {
			let updated = await updateMusicBand(email, data);
			if (updated)
				return res
					.status(201)
					.send({ msg: "Se actualizó la banda correctamente" });
			return res.status(400).send({ error: "Ha ocurrido un error" });
		} catch (error) {
			return res.status(500).send({ error: "No se pudo actualizar la banda" });
		}
	} else {
		res.status(404).send({ msg: "Data faltante o incorrecta" });
	}
};

const createMusicBandController = async (req: any, res: any) => {
	const musicBand = req.body.newMusicBand;
	if (musicBand) {
		try {
			let created = await createMusicBand(musicBand);
			if (created.hasOwnProperty("error"))
				return res
					.status(400)
					.send({ error: "Ya existe un usuario registrado con ese correo" });
			return res.status(201).send({ msg: "se creó la banda correctamente" });
		} catch (error) {
			return res.status(500).send({ error: "Something went wrong" });
		}
	} else {
		res.status(400).send({ msg: "Data faltante o incorrecta" });
	}
};

const addBandReviewController = async (req: any, res: any) => {
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

const getMusicBandByEmailController = async (req: any, res: any) => {
	const { email } = req.params;
	if (email) {
		const musicBand = await getMusicBand(email);
		return res.status(200).send(musicBand);
	}
	return res.status(404).send({ msg: "Invalid data" });
};

const getMusicBandByIDController = async (req: any, res: any) => {
	const { id } = req.params;
	if (id) {
		const musicBand = await getMusicBandByID(id);
		return res.status(200).send(musicBand);
	}
	if (!id) return res.status(404).send({ msg: "Invalid data" });
};

const disabledBandController = async (req: any, res: any) => {
	const { email, disabled } = req.body;
	if (disabled) {
		try {
			await disabledMusicBand(email, disabled);
			let musicBandByEmail = await getMusicBand(email);
			if (musicBandByEmail) {
				if (musicBandByEmail.disabled === true) {
					for (const date of musicBandByEmail.pendingDates) {
						await removePendingDate(
							email,
							date.email,
							date.date.toISOString().substring(0, 10)
						);
					}
					for (const date of musicBandByEmail.dates) {
						await removeConfirmedDate(
							email,
							date.email,
							date.date.toISOString().substring(0, 10)
						);
					}
					res.status(201).send({ msg: "Se desactivo la banda correctamente" });
				}
				if (musicBandByEmail.disabled === false) {
					res.send(
						"MusicBand disabled = false, MusicBand fue activada nuevamente"
					);
				}
			} else {
				return res.status(400).send({ error: "Ha ocurrido un error" });
			}
		} catch (error) {
			return res.status(500).send({ error: "No se pudo desactivar la banda" });
		}
	} else {
		res.status(404).send({ msg: "Data faltante o incorrecta" });
	}
};

const sendNotificationController = async (req: any, res: any) => {
	const { email, notification } = req.body;
	if (!email || !notification) return res.status(400).send("Invalid data");

	try {
		const response = await sendNotification(musicBand, email, notification);
		return res.status(200).send(response);
	} catch (error) {
		return res.status(500).send({ error: "Internal error" });
	}
};

const deleteNotificationController = async (req: any, res: any) => {
	const { email } = req.body;
	if (!email) return res.status(404).send("Invalid data");

	try {
		const response = await deleteAllNotifications(musicBand, email);
		return res.status(200).send(response);
	} catch (error) {
		return res.status(500).send({ error: "Internal error" });
	}
};

//Testing required
const switchController = async (req: any, res: any) => {
	const { email, id } = req.body;
	if (!email || !id) return res.status(400).send({ error: "Invalid data" });

	try {
		const switchN = await switchNew(musicBand, email, id);
		return res.status(200).send(switchN);
	} catch (error) {
		return res.status(500).send({ error: "Internal error" });
	}
};

//Working
const getNotificationsController = async (req: any, res: any) => {
	const { email } = req.body;
	if (!email) return res.status(400).send({ error: "Invalid data" });
	try {
		const notifications = await getNotifications(musicBand, email);
		return res.status(200).send(notifications);
	} catch (error) {
		return res.status(500).send({ error: "Internal error" });
	}
};

const deleteOneController = async (req: any, res: any) => {
	try {
		const { email, id } = req.body;
		if (!email || !id) return res.status(400).send({ error: "Invalid data" });
		const operation = await deleteOne(musicBand, email, id);
		return res.status(200).send(operation);
	} catch (error) {
		return res.status(500).send({ error: "Internal error" });
	}
};

const banMusicBandController = async (req: any, res: any) => {
	let { email } = req.body;
	if (email) {
		let musicBandByEmail = await getMusicBand(email);
		if (musicBandByEmail) {
			if (musicBandByEmail.banned === false) {
				for (const date of musicBandByEmail.pendingDates) {
					await removePendingDate(
						email,
						date.email,
						date.date.toISOString().substring(0, 10)
					);
				}
				for (const date of musicBandByEmail.dates) {
					await removeConfirmedDate(
						email,
						date.email,
						date.date.toISOString().substring(0, 10)
					);
				}
				await banHandler(email);
				res.send(
					"MusicBand banned = true, todas sus fechas y relaciones con Places fueron eliminadas (si las tuviera)"
				);
			}
			if (musicBandByEmail.banned === true) {
				await banHandler(email);
				res.send("MusicBabd banned = false, MusicBand fue desbaneada");
			}
		} else {
			return res.status(404).send("Email no corresponde a una musicBand");
		}
	} else {
		return res.status(404).send({ msg: "Data incorrecta" });
	}
};

module.exports = {
	getAllBandsController,
	createMusicBandController,
	addBandReviewController,
	getMusicBandByEmailController,
	getMusicBandByIDController,
	updateMusicBandController,
	disabledBandController,
	sendNotificationController,
	deleteNotificationController,
	getNotificationsController,
	switchController,
	deleteOneController,
	banMusicBandController,
};
