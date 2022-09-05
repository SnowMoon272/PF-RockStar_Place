const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");

export const adminSchema = new Schema({
	personInCharge: {
		type: String,
		trim: true,
		default: "",
	},
	name: {
		type: String,
		trim: true,
		default: "",
	},
	email: {
		type: String,
		unique: true,
	},
	password: String,
	role: {
		type: String,
		default: "admin",
	},
	profilePicture: { type: String, trim: true, default: "" },
	notifications: [
		{
			new: { type: Boolean, default: true },
			title: { type: String, default: "" },
			message: { type: String, require: true, default: "" },
			type: { type: String, default: "info" },
			before: { type: Object, default: undefined },
			from: { type: String, default: "System" },
		},
	],
});

adminSchema.methods.isValidPassword = async function (password: string) {
	const user = this;
	const compare = await bcrypt.compare(password, user.password);
	return compare;
};

module.exports = adminSchema;
