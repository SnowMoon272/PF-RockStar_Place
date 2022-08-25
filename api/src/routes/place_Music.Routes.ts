const { Router } = require("express");

const {
	addPendingDateController,
	addConfirmedDateController,
} = require("../controllers/combined.controller");

const router = Router();

export const f = {};

router.post("/pendingdates", addPendingDateController);
router.put("/matchdate", addConfirmedDateController);

module.exports = router;
