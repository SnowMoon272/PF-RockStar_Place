const { Router } = require("express");
const { checkOutController } = require("../controllers/mercadoPago.controller.ts");

const router = Router();

export const f = {};

router.post("/checkOut", checkOutController);

module.exports = router;
