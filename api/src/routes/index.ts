const { Router } = require("express");
const musicBandRoutes = require("./musicBand.routes");
const placeRoutes = require("./place.routes");
const mercadoPago = require("./mercadoPago.routes");

const router = Router();

router.use(musicBandRoutes);
router.use(placeRoutes);
router.use(mercadoPago);

module.exports = router;
