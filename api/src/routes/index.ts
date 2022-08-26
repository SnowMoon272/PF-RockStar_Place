const { Router } = require('express');
const musicBandRoutes = require('./musicBand.routes.ts');
const placeRoutes = require('./place.routes.ts');
const mercadoPago = require('./mercadoPago.routes.ts');
const placeMusicRoutes = require('./place_Music.routes.ts');

const router = Router();

router.use(musicBandRoutes);
router.use(placeRoutes);
router.use(mercadoPago);
router.use(placeMusicRoutes);

module.exports = router;
