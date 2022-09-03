const adminSchema = require("../schemas/admin.schema");
const { model } = require("mongoose");
const bcrypt = require("bcrypt");


export const admin = model("admin", adminSchema);


/**
 *	EncodePassword es la función encargada de encriptar la contraseña del usuario, que le llega {createMusicBand()} por parametro
 *
 *	@param {string} contraseña Recibe por parametro la contraseña a ser encriptada
 *	@return {string} Retorna la contraseña del usuario encriptada
 * @author Sebastian Pérez <https://github.com/Sebastian-pz>
 */
 const encodePassword = async (password: string) => {
	const salt = await bcrypt.genSalt(6);
	const encodedPassword = await bcrypt.hash(password, salt);
	return encodedPassword;
};


export const createAdmin = async (newAdmin: any) => {
	newAdmin.password = await encodePassword(newAdmin.password);
	newAdmin.role = "admin";

	try {
		let created = await admin.create(newAdmin);
		return created;
	} catch (error: any) {
		return { error: "An error occurred getting user" };
	}
};