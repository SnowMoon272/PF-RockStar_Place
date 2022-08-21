const { Router } = require("express");
const {
  getAllBandsController,
	createMusicBandController,
	addBandReviewController,
	getMusicBandController,
} = require("../controllers/musicBand.controller");


const router = Router();

export const f = {};

router.get("/musicbands", getAllBandsController);
router.post("/musicbands", createMusicBandController);
router.post("/bandreviews", addBandReviewController);
router.get("/musicband", getMusicBandController);

module.exports = router;
