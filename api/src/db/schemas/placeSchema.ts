const placeSchema = new Schema({
	capacity: { type: String, trim: true, require: true },

	name: { type: String, trim: true, require: true },

	city: { type: String, trim: true, require: true },

	adress: { type: String, trim: true, require: true },

	rating: { type: Number, default: 0 },

	description: { type: String, trim: true, default: "" },

	reviews: [
		{
			author: { type: String, trim: true, require: false },
			review: { type: String, trim: true, require: false },
			rating: Number,
		},
	],
	dates: [
		{
			date: { type: Date },
			musicBand: { type: String },
		},
	],
	socialMedia: {
		instagram: { type: String, trim: true, default: undefined },
		spotify: { type: String, trim: true, default: undefined },
		youtube: { type: String, trim: true, default: undefined },
	},
	pendingDates: [
		{
			place: String,
			date: { type: Date, default: Date.now },
		},
	],
	profilePicture: { type: String, require: false },
});

module.exports = placeSchema;
