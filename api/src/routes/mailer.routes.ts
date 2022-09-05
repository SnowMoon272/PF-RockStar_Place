const { Router } = require("express");
const {
	matchMailController,
	registerMailController,
	bannedEmailController,
	cancelBandMatchController,
	updatePasswordMailController,
	cancelPlaceMatchController,
} = require("../controllers/nodeMailer.controller");

const router = Router();

export const f = {};

router.get(`/banned/:email`, bannedEmailController);
router.get(`/register/mail/:email`, registerMailController);
router.get(`/matchmails/:musicEmail/:placeEmail/:date`, matchMailController);
router.get(`/cambioclave/:email`, updatePasswordMailController);
router.get(
	`/cancelmatchband/:musicEmail/:placeEmail/:date`,
	cancelBandMatchController
);
router.get(
	`cancelmatchplace/:musicEmail/:placeEmail:date`,
	cancelPlaceMatchController
);

module.exports = router;
