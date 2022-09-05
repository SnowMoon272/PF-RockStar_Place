const { Router } = require("express");
const {
	matchMailController,
	registerMailController,
	bannedEmailController,
	cancelMatchController,
	updatePasswordMailController,
} = require("../controllers/nodeMailer.controller");

const router = Router();

export const f = {};

router.get(`/banned/:email`, bannedEmailController);
router.get(`/register/mail/:email`, registerMailController);
router.get(`/matchmails/:musicEmail/:placeEmail/:date`, matchMailController);
router.get(`/cancelmatch/:musicEmail/:placeEmail/:date`, cancelMatchController);
router.get(`/cambioclave/:email`, updatePasswordMailController);

module.exports = router;
