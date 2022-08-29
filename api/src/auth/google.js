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
        // console.log(profile);
        const { name, picture, email} = profile._json;
        console.log(`Nombre: ${name}, email: ${email}`);
				let user = await musicBand.findOne({ email: email });
				if (!user) user = await place.findOne({ email: email });
				if (!user) user = await socialUser.findOne({ email: email });

        // console.log(user);
				if (user) return done(null, user);

        const newSocialUser = {
          email: email,
          profilePicture: picture,
					personInCharge: name,
          role: "social"
        }
        // email: {
        //   type: String,
        //   unique: true,
        // },
        // profilePicture: {type: String, trim: true, default: ""},
        // personInCharge: {type: String, trim: true},
        // role: {type: String, require:true, default:"social"}

				user = await socialUser.create(newSocialUser);
        // console.log(user);
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
