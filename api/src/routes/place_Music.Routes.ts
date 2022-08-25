const { Router } = require("express");

const {
	addPendingDateController,
} = require("../controllers/combined.controller");

const router = Router();

export const f = {};

router.post("/pendingdates", addPendingDateController);

module.exports = router;
