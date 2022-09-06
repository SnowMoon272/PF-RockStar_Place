const { Router } = require("express");

const {
	addPendingDateController,
	removePendingDateController,
	addConfirmedDateController,
	removeConfirmedDateController,
	getEmailsController,
	getPlaceOrMusicBandByNameController,
} = require("../controllers/combined.controller");

const router = Router();

export const f = {};

router.post("/pendingdates", addPendingDateController);
router.put("/pendingdates", removePendingDateController);
router.put("/matchdate", addConfirmedDateController);
router.put("/dates", removeConfirmedDateController);
router.get("/emails", getEmailsController);
router.get("/combinedsearch", getPlaceOrMusicBandByNameController);

module.exports = router;
