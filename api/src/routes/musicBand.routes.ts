const { Router } = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const {
	getAllBandsController,
	createMusicBandController,
	addBandReviewController,
	getMusicBandByEmailController,
	getMusicBandByIDController,
	updateMusicBandController,
	banMusicBandController,
	sendNotificationController,
	deleteNotificationController,
} = require("../controllers/musicBand.controller.ts");
require("dotenv").config();

const jwtSecret = process.env.BACK_JWT_SECRET;
const { musicBand } = require("../db/models/musicBandModel.ts");
const { ROLES, checkRoleAuth } = require("./middlewares/authorization.js");

const router = Router();

export const f = {};

router.get("/musicbands", getAllBandsController);
router.post("/musicbands", createMusicBandController);
router.get("/musicbandemail/:email", getMusicBandByEmailController);
router.get("/musicband/:id", getMusicBandByIDController);
router.put(
	"/musicband",
	checkRoleAuth([ROLES.admin, ROLES.musicband]),
	updateMusicBandController
);
router.put(
	"/banmusicband",
	checkRoleAuth([ROLES.admin]),
	banMusicBandController
);
router.post("/musicband/send/notification", sendNotificationController);
router.post(
	"/musicband/delete/notifications",
	checkRoleAuth([ROLES.admin, ROLES.musicband, ROLES.place]),
	deleteNotificationController
);
router.post(
	"/bandreviews",
	checkRoleAuth([ROLES.admin, ROLES.place]),
	addBandReviewController
);

router.post(
	"/signup",
	passport.authenticate("signup", { session: false }),
	async (req: any, res: any, next: any) => {
		const { name, personInCharge, description } = req.body;
		let user = await req.user;
		await musicBand.findOneAndUpdate(
			{ email: user.email },
			{ name, personInCharge, description }
		);

		// const update = musicBand.updateOne({email : })
		res.json({
			message: "Signup successfully",
			user: user,
		});
	}
);

router.post("/login", async (req: any, res: any, next: any) => {
	passport.authenticate("login", async (err: any, user: any, info: any) => {
		try {
			if (err || !user) {
				const error = new Error(err);
				return next(error);
			}

			req.login(user, { session: false }, async (err: Error) => {
				if (err) return next(err);
				// Datos a encriptar con jwt
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
				return res.json({ token });
			});
		} catch (error) {
			return next(error);
		}
	})(req, res, next);
});

module.exports = router;
