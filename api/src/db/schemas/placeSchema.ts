// const { Schema } = require('mongoose');

const placeSchema = new Schema({
	name: String,
	location: String,
	rating: { type: Number, default: 0 },
	reviews: [
		{
			review: String,
			rating: Number,
		},
	],
	dates: [
		{
			date: { type: Date },
			musicBand: { type: String },
		},
	],
});

module.exports = placeSchema;
