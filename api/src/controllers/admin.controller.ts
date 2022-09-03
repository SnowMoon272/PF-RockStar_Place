import {
	deleteAllNotifications,
	sendNotification,
	switchNew,
	getNotifications,
	deleteOne,
} from "../db/models/inter.model";

import { admin, createAdmin } from "../db/models/admin.model";

//Working
const getNotificationsController = async (req: any, res: any) => {
	const { email } = req.body;
	if (!email) return res.status(400).send({ error: "Invalid data" });
	try {
		const notifications = await getNotifications(admin, email);
		return res.status(200).send(notifications);
	} catch (error) {
		return res.status(500).send({ error: "Internal error" });
	}
};

const deleteOneController = async (req: any, res: any) => {
	try {
		const { email, id } = req.body;
		if (!email || !id) return res.status(400).send({ error: "Invalid data" });
		const operation = await deleteOne(admin, email, id);
		return res.status(200).send(operation);
	} catch (error) {
		return res.status(500).send({ error: "Internal error" });
	}
};

const addNotificationController = async (req: any, res: any) => {
	const { email, notification } = req.body;
	if (!email || !notification) return res.status(400).send("Invalid data");

	try {
		const response = await sendNotification(admin, email, notification);
		return res.status(200).send(response);
	} catch (error) {
		return res.status(500).send({ error: "Internal error" });
	}
};

const deleteNotificationController = async (req: any, res: any) => {
	const { email } = req.body;
	if (!email) return res.status(404).send("Invalid data");

	try {
		const response = await deleteAllNotifications(admin, email);
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
		const switchN = await switchNew(admin, email, id);
		return res.status(200).send(switchN);
	} catch (error) {
		return res.status(500).send({ error: "Internal error" });
	}
};

const createAdminController = async (req: any, res: any) => {
	const { admin } = req.body;
	if (admin) {
		try {
			let created = await createAdmin(admin);
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

module.exports = {
  getNotificationsController,
  deleteOneController,
  addNotificationController,
  deleteNotificationController,
  switchController,
	createAdminController
}