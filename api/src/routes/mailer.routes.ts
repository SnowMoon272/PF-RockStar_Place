const { Router } = require("express");
const {
	matchMailController,
	registerMailController,
	bannedEmailController,
	cancelBandController,
	updatePasswordMailController,
	cancelPlaceController,
} = require("../controllers/nodeMailer.controller");

const router = Router();

export const f = {};

router.get(`/cancelband/:musicEmail/:placeEmail/:date`, cancelBandController);
router.get(`/cancelplace/:musicEmail/:placeEmail/:date`, cancelPlaceController);
router.get(`/banned/:email`, bannedEmailController);
router.get(`/register/mail/:email`, registerMailController);
router.get(`/matchmails/:musicEmail/:placeEmail/:date`, matchMailController);
router.get(`/cambioclave/:email`, updatePasswordMailController);

module.exports = router;
