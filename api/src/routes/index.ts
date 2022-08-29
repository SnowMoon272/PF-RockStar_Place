const { Router } = require('express');
const musicBandRoutes = require('./musicBand.routes.ts');
const placeRoutes = require('./place.routes.ts');
const mercadoPago = require('./mercadoPago.routes.ts');
const placeMusicRoutes = require('./placeMusic.routes.ts');
const googleRoutes = require("./google.routes.ts");

const router = Router();

router.use(musicBandRoutes);
router.use(placeRoutes);
router.use(mercadoPago);
router.use(placeMusicRoutes);
router.use("/auth", googleRoutes);

module.exports = router;
