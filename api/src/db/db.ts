const mongoose = require('mongoose');
require('dotenv').config();

export const f ={};

const connect = async () => {
	await mongoose.connect(
		`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@rockstar-pf.cdbn0ge.mongodb.net/users?retryWrites=true&w=majority`
	);
};

module.exports = connect;
