const { Router } = require("express");
const {
	matchMailController,
	registerMailController,
} = require("../controllers/nodeMailer.controller");

const router = Router();

export const f = {};

router.get(`/register/mail/:email`, registerMailController);
router.get(`/matchmails/:musicEmail/:placeEmail`, matchMailController);

module.exports = router;
