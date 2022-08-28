const { Router } = require("express");

const {
	addPendingDateController,
	removePendingDateController,
	addConfirmedDateController,
	removeConfirmedDateController,
} = require("../controllers/combined.controller");

const router = Router();

export const f = {};

router.post("/pendingdates", addPendingDateController);
router.put("/pendingdates", removePendingDateController);
router.put("/matchdate", addConfirmedDateController);
router.put("/dates", removeConfirmedDateController);

module.exports = router;
