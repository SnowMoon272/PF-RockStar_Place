import { notification } from "../interfaces/musicBand.interfaces";
import mongoose from "mongoose";

/**
 *	sendNotification es la función encargada de enviar notificaciones a los usuarios
 *
 *	@param {Model} modelo recibe por parametro el modelo de mongoose que será utilizada
 *	@param {string} email recibe por parametro el email de la cuenta que será notificada
 *	@param {object} notificación recibe por parametro un objeto notificación con los atributos isNew, type y message
 *	@return {object} Retorna la respuesta del update
 */
export const sendNotification = async (
	modelo: any,
	email: string,
	notification: notification
) => {
	try {
		const res = await modelo.updateOne(
			{ email },
			{ $push: { notifications: notification } }
		);

		return res;
	} catch (error) {
		return { error: `Error sending, (${error})` };
	}
};

/**
 *	deleteAllNotifications es la función encargada de enviar eliminar las notificaciones a los usuarios
 *
 *	@param {Model} modelo recibe por parametro el modelo de mongoose que será utilizada
 *	@param {string} email recibe por parametro el email de la cuenta que será modificada
 *	@return {object} Retorna la respuesta del update
 */
export const deleteAllNotifications = async (modelo: any, email: string) => {
	try {
		const res = modelo.updateOne({ email }, { notifications: [] });
		return res;
	} catch (error) {
		return { error: `Error deleting, (${error})` };
	}
};

export const switchNew = async (modelo: any, email: string, id: string) => {
	try {
		const user = await modelo.findOne({ email });
		if (!user) return { error: "user not found" };
		const { notifications } = user;

		const switched = notifications.map((notification: any) => {
			const {_id} = notification;
			const idString = _id.toString();

			if (idString === id) {
				notification.new === true
					? (notification.new = false)
					: (notification.new = true);
			}
			return notification;
		});

		const update = await modelo.updateOne(
			{ email },
			{ notifications: switched }
		);
		return update;
	} catch (error) {
		return { error: `Error switching: (${error})` };
	}
};

/**
 *	getNotifications es la función encargada traer todas las notificaciones de un usuario
 *
 *	@param {Model} modelo recibe por parametro el modelo de mongoose que será utilizada
 *	@param {string} email recibe por parametro el email de la cuenta a la que se quieren acceder a sus notificaciones
 *	@return {object} Retorna un arreglo con las notificaiones del usuario
 */
export const getNotifications = async (modelo: any, email: string) => {
	try {
		const { notifications } = await modelo.findOne({ email });
		return notifications;
	} catch (error) {
		return { error: `Error in getter: (${error})` };
	}
};

//Not used
export const markAsRead = async (model: any, email: string, id: string) => {
	try {
		const mark = await model.updateOne(
			{ "notifications._id": id },
			{ "notifications.isNew": false }
		);
		return mark;
	} catch (error) {
		return { error: `Error in mark as read: (${error})` };
	}
};

//Not used
export const markAllAsRead = async (model: any, email: string) => {
	try {
		const user = await model.find({ email });
		let nots = user.notifications.forEach((notification: any) => {
			notification.new = false;
		});

		const viewed = await model.updateOne({ email }, { notifications: nots });
		return viewed;
	} catch (error) {
		return { error: `Error in mark all as read: (${error})` };
	}
};

export const deleteOne = async (model: any, email: string, id: string) => {
	try {
		const { notifications } = await model.findOne({ email });
		const actualNotifications = notifications.filter((notification:any) => {
			const {_id} = notification;
			const idString = _id.toString();
			if(idString !== id) return notification;
		});

		const update = await model.updateOne({email}, {notifications: actualNotifications});

		return update;

	} catch (error) {
		return { error: `Error in delete one: (${error})`}
	}
}
