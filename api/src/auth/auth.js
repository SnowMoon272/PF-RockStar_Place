const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const { musicBand } = require("../db/models/musicBandModel.ts");
const { place } = require("../db/models/placeModel.ts");
const { admin } = require("../db/models/admin.model.ts");
const bcrypt = require("bcrypt");

passport.use(
	"signup",
	new localStrategy(
		{
			usernameField: "email",
			passwordField: "password",
		},
		async (email, password, done) => {
			try {
				let hashPassword = await bcrypt.hash(password, 6);
				const isEmail = musicBand.find({ email });
				if (isEmail) return done(null, { message: "Email duplicated" });

				const user = musicBand.create({ email, password: hashPassword });
				return done(null, user);
			} catch (error) {
				done(error);
			}
		}
	)
);

passport.use(
	"login",
	new localStrategy(
		{
			usernameField: "email",
			passwordField: "password",
		},
		async (email, password, done) => {
			try {
				let user = await musicBand.findOne({ email });
				if (!user) user = await place.findOne({ email });
				if (!user) user = await admin.findOne({ email });
				if (!user) return done(null, false, { message: "User not found" });

				const validate = await bcrypt.compare(password, user.password);
				if (!validate) return done(null, false, { message: "Wrong password" });

				return done(null, user, { message: "Successful" });
			} catch (error) {
				return done(error);
			}
		}
	)
);
