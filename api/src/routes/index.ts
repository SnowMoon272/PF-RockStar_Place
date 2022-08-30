const { Router } = require("express");
const musicBandRoutes = require("./musicBand.routes.ts");
const placeRoutes = require("./place.routes.ts");
const mercadoPago = require("./mercadoPago.routes.ts");
const placeMusicRoutes = require("./placeMusic.routes.ts");
const googleRoutes = require("./google.routes.ts");
const tokenRoutes = require("./token.routes.ts");

const router = Router();
const Def = Router();

// Def.get("/", (req: any, res: any) => {
// 	return res.status(200).send("Todo ok");
// });
// router.use(Def);
router.use(musicBandRoutes);
router.use(placeRoutes);
router.use(mercadoPago);
router.use(placeMusicRoutes);
router.use(tokenRoutes);
router.use("/auth", googleRoutes);

module.exports = router;
