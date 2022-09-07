const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const { socialUser } = require("../db/models/socialModel.ts");
const { musicBand } = require("../db/models/musicBandModel.ts");
const { place } = require("../db/models/placeModel.ts");

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
		},
		async function (accessToken, refreshToken, profile, done) {
			try {
				const { name, picture, email } = profile._json;
				let user = await musicBand.findOne({ email: email });
				if (!user) user = await place.findOne({ email: email });
				if (!user) user = await socialUser.findOne({ email: email });
				if (user) return done(null, user);

				const newSocialUser = {
					email: email,
					profilePicture: picture,
					personInCharge: name,
					role: "social",
				};
				user = await socialUser.create(newSocialUser);
				return done(null, user, { message: "Successful" });
			} catch (error) {
				done(error, false);
			}
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});
passport.deserializeUser((user, done) => {
	done(null, user);
});
