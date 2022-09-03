const { Router } = require("express");
const musicBandRoutes = require("./musicBand.routes.ts");
const placeRoutes = require("./place.routes.ts");
const mercadoPago = require("./mercadoPago.routes.ts");
const placeMusicRoutes = require("./placeMusic.routes.ts");
const googleRoutes = require("./google.routes.ts");
const tokenRoutes = require("./token.routes.ts");
const mailerRoutes = require("./mailer.routes");

const router = Router();

router.use(musicBandRoutes);
router.use(placeRoutes);
router.use(mercadoPago);
router.use(placeMusicRoutes);
router.use(tokenRoutes);
router.use("/auth", googleRoutes);
router.use(mailerRoutes);

module.exports = router;
