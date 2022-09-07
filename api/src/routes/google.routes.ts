const { Router } = require("express");
const passport = require("passport");
require("dotenv").config();
const jwtSecret = process.env.BACK_JWT_SECRET;
const jwt = require("jsonwebtoken");
import { musicRoles } from "../db/interfaces/musicBand.interfaces";
import { switchToMusicBand, switchToPlace } from "../db/models/socialModel";

const router = Router();
export const f = {};

const CLIENT_URL =
	"https://pf-rock-star-place.vercel.app/";

router.get("/login/failed", (req: any, res: any) => {
	res.status(401).send({ error: "login failed" });
});

router.get("/cookie-info", (req: any, res: any) => {
	const user = req.session.passport.user;
	if (!user) return res.status(200).send({ message: "Not session" });
	const body = {
		_id: user._id,
		email: user.email,
		role: user.role,
		name: user.name,
	};
	const token = jwt.sign(
		{
			user: body,
		},
		jwtSecret,
		{ expiresIn: 60 * 60 }
	);
	return res.status(200).send(token);
});

router.post("/change/type", async (req: any, res: any) => {
	const { role, email } = req.body;
	if (role && email) {
		if (role === musicRoles.MUSICBAND) {
			try {
				await switchToMusicBand(email);
				return res.status(200).send({ message: "Success" });
			} catch (error) {
				return res.status(500).send({ error: "Error switching roles" });
			}
		} else if (role === musicRoles.PLACE) {
			try {
				await switchToPlace(email);
				return res.status(200).send({ message: "Success" });
			} catch (error) {
				return res.status(500).send({ error: "Error switching roles" });
			}
		}
	}
});

router.get("/login/success", (req: any, res: any) => {
	if (req.user) {
		const { user } = req;
		if (req.user.role) {
			const body = {
				_id: user._id,
				email: user.email,
				role: user.role,
				name: user.name,
			};
			const token = jwt.sign(body, jwtSecret);
			// saveToken(token);
			req.session.token = token;
			return res.json({ token });
		}
		const body = {
			_id: user._id,
			email: user.email,
			role: "social",
		};
		const token = jwt.sign(body, jwtSecret);

		return res.json({ token });
	}
});

router.get("/logout", (req: any, res: any) => {
	req.logout();
	res.redirect(CLIENT_URL);
});

router.get(
	"/google",
	passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);

module.exports = router;
