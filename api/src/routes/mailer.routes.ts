const { Router } = require("express");
const {
	matchMailController,
	registerMailController,
	cancelPendingDateController,
	newPendingDateController,
	bannedEmailController,
	cancelMatchController,
} = require("../controllers/nodeMailer.controller");

const router = Router();

export const f = {};

router.get(`/banned/:email`, bannedEmailController);
router.get(`/register/mail/:email`, registerMailController);
router.get(`/matchmails/:musicEmail/:placeEmail`, matchMailController);
router.get(`/canceldate/:email`, cancelPendingDateController);
router.get(`/newpendingdate/:email`, newPendingDateController);
router.get(`/cancelmatch/:musicEmail/:placeEmail`, cancelMatchController);

module.exports = router;
