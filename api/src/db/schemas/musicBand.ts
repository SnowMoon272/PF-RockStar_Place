const { Schema } = require("mongoose");

const musicBandSchema = new Schema({
    personInCharge : {
        type: String,
        trim : true,
        default : undefined
    },
	name: {
        type : String,
        trim : true
    },
	email: {
        type:String,
        unique: true,

    },
	password: String,
	rating: Number,
	reviews: [
		{
			author: {type : String, trim: true},
			comment: { type: String, trim : true },
			rating: { type: Number, min : 0, max : 5 },
		},
	],
	dates: [
		{
			place: String,
			date: { type: Date, default: Date.now },
		},
	],
	banned: {type:Boolean, default: false},
    role : {
        type : String,
        default : "musicband"
    }
});

module.exports = musicBandSchema;

// Social media
// Leader