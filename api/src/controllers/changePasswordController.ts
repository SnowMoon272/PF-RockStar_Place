const { model } = require("mongoose");

const bcrypt = require("bcrypt");

const { musicBand } = require("../db/models/musicBandModel");
const { place } = require("../db/models/placeModel");

const encodePassword = async (password: string) => {
	const salt = await bcrypt.genSalt(6);
	const encodedPassword = await bcrypt.hash(password, salt);
	return encodedPassword;
};

const changePassword = async (email: string, newPassword: string) => {
	if (email && newPassword) {
		const encodedPassword = await encodePassword(newPassword);
		try {
			let user;
			if (!user) user = await musicBand.findOneAndUpdate({ email }, { password: encodedPassword });
			if (!user) user = await place.findOneAndUpdate({ email }, { password: encodedPassword });
			return user;
		} catch (error) {
			console.error(`Algo salió mal: ${error}`);
		}
	}
};

const changePasswordController = async (req: any, res: any) => {
	const { email, newPassword } = req.body;
	if (newPassword && email) {
		try {
			let updated = await changePassword(email, newPassword);
			if (updated) return res.status(201).send({ msg: "Se actualizó la contraseña correctamente" });
			return res.status(400).send({ error: "Ha ocurrido un error" });
		} catch (error) {
			return res.status(500).send({ error: "No se pudo actualizar la contraseña" });
		}
	} else {
		res.status(404).send({ msg: "Data faltante o incorrecta" });
	}
};

module.exports = {
	changePasswordController,
};
