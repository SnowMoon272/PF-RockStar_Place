const { Router } = require("express");
const musicBandRoutes = require("./musicBand.routes");
const placeRoutes = require("./place.routes");
const placeMusicRoutes = require("./place_Music.routes");

const router = Router();

router.use(musicBandRoutes);
router.use(placeRoutes);
router.use(placeMusicRoutes);

module.exports = router;
