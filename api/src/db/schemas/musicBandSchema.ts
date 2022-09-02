const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");


export const musicBandSchema = new Schema({
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
	rating: Number,
	reviews: [
		{
			author: { type: String, trim: true },
			comment: { type: String, trim: true },
			rating: { type: Number, min: 0, max: 5 },
		},
	],
	dates: [
		{
			place: { type: String },
			date: { type: Date },
			email: { type: String },
		},
	],
	banned: { type: Boolean, default: false },
	disabled : { type: Boolean, default: false },
	role: {
		type: String,
		default: "musicband",
	},
	socialMedia: {
		instagram: { type: String, trim: true, default: "" },
		spotify: { type: String, trim: true, default: "" },
		youtube: { type: String, trim: true, default: "" },
	},
	phoneNumber: { type: String, trim: true, default: "" },
	description: { type: String, trim: true, default: "" },
	profilePicture: { type: String, trim: true, default: "" },
	pendingDates: [
		{
			place: { type: String },
			date: { type: Date },
			email: { type: String },
		},
	],
	notifications: [
		{
			new: {type: Boolean, default: true},
			title: {type: String, default:""},
			message: {type: String, require: true, default:""},
			type: {type: String, default: "info"},
			before: {type: Object, default:undefined},
			from: {type: String, default: "System"}
		}
	],
});

musicBandSchema.methods.isValidPassword = async function(password : string){
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
}

module.exports = musicBandSchema;
