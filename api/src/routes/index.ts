const { Router } = require("express");
const musicBandRoutes = require("./musicBand.routes");
const placeRoutes = require("./place.routes");

const router = Router();

router.use(musicBandRoutes);
router.use(placeRoutes);


module.exports = router;
