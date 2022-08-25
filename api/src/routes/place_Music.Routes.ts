const { Router } = require("express");

const {
	addPendingDateController,
	removePendingDateController,
} = require("../controllers/combined.controller");

const router = Router();

export const f = {};

router.post("/pendingdates", addPendingDateController);
router.delete("/pendingdates", removePendingDateController);

module.exports = router;
