const { Router } = require("express");
const {
	getAllBandsController,
	createMusicBandController,
	addBandReviewController,
	getMusicBandByEmailController,
	getMusicBandByIDController,
	updateMusicBandController,
} = require("../controllers/musicBand.controller");

const router = Router();

export const f = {};

router.get("/musicbands", getAllBandsController);
router.post("/musicbands", createMusicBandController);
router.post("/bandreviews", addBandReviewController);
router.get("/musicbandemail/:email", getMusicBandByEmailController);
router.get("/musicband/:id", getMusicBandByIDController);
router.put("/musicband", updateMusicBandController);

module.exports = router;
