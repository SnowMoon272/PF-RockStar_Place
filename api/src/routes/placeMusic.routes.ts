const { Router } = require("express");

const {
	addPendingDateController,
	removePendingDateController,
	addConfirmedDateController,
	removeConfirmedDateController,
	getEmailsController
} = require("../controllers/combined.controller");

const router = Router();

export const f = {};

router.post("/pendingdates", addPendingDateController);
router.put("/pendingdates", removePendingDateController);
router.put("/matchdate", addConfirmedDateController);
router.put("/dates", removeConfirmedDateController);
router.get("/emails", getEmailsController)

module.exports = router;
