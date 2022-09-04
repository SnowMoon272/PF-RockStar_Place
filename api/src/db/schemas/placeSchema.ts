const { Schema } = require("mongoose");

export const placeSchema = new Schema({
	personInCharge: {
		type: String,
		trim: true,
		default: "",
	},

	email: { type: String, trim: true, require: true, unique: true },

	password: { type: String, require: true },

	hasSound: { type: Boolean, require: true, default: false },

	capacity: { type: String, trim: true, require: true, default: "" },

	name: { type: String, trim: true, require: true, default: "" },

	city: { type: String, trim: true, require: true, default: "" },

	adress: { type: String, trim: true, require: true, default: "" },

	rating: { type: Number, default: 0 },

	description: { type: String, trim: true, default: "" },

	banned: { type: Boolean, default: false },
	disabled: { type: Boolean, default: false },
	role: {
		type: String,
		default: "place",
	},

	reviews: [
		{
			author: { type: String, trim: true, require: false },
			comment: { type: String, trim: true, require: false },
			rating: Number,
		},
	],
	dates: [
		{
			date: { type: Date },
			email: { type: String },
		},
	],
	availableDates: [
		{
			date: { type: Date },
			isAvailable: { type: Boolean },
		},
	],
	pendingDates: [
		{
			musicBand: { type: String },
			date: { type: Date },
			email: { type: String },
		},
	],
	socialMedia: {
		instagram: { type: String, trim: true, default: "" },
	},
	phoneNumber: { type: String, trim: true, default: "" },

	profilePicture: {
		type: String,
		require: false,
		default:
			"https://www.nicepng.com/png/detail/608-6080578_png-file-svg-icono-de-persona-png.png",
	},

	suscription: {
		isSuscribed: { type: Boolean, default: false },
		startDate: { type: Date, default: Date.now },
		payment_id: { type: String, default: "" },
	},

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

	coords: {
		lat: { type: String, default: "" },
		lng: { type: String, default: "" },
	},
});

module.exports = placeSchema;
