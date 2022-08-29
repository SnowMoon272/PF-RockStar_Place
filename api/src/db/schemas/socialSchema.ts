const { Schema } = require("mongoose");

export const socialSchema = new Schema({
  email: {
		type: String,
		unique: true,
	},
  profilePicture: {type: String, trim: true, default: ""},
  personInCharge: {type: String, trim: true},
  role: {type: String, require:true, default:"social"}
});

module.exports = socialSchema;