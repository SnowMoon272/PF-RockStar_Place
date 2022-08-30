const { Router } = require("express");

const router = Router();
const { reloadTokenController } = require("../controllers/token.controller");

export const f = {};

router.post("/refreshToken", reloadTokenController);

module.exports = router;
