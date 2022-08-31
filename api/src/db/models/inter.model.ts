import { notification } from "../interfaces/musicBand.interfaces";

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
		const res = await modelo.update(
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
		const res = modelo.update({ email }, { notifications: [] });
		return res;
	} catch (error) {
		return { error: `Error deleting, (${error})` };
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
		const notifications = await modelo.findOne({ email }, { notifications: 1 });
		return notifications;
	} catch (error) {
		return { error: `Error in getter: (${error})` };
	}
};

//Testing
export const markAsRead = async (model: any, email: string, id: string) => {
	try {
		const mark = await model.update(
			{ "notifications._id": id },
			{ "notifications.isNew": false }
		);
    return mark;
	} catch (error) {
		return { error: `Error in mark as read: (${error})` };
	}
};
