const { Router } = require("express");
const {
	getAllPlacesController,
	createPlaceController,
	addPlaceReviewController,
	getPlaceByIDController,
	getPlaceByNameController,
	getCitiesController,
	updatePlaceController,
	DeleteAvailableDatePlaceController,
	AddDatePlaceController,
	suscribedSuccessfulController,
	getPlaceByEmailController,
	disabledPlaceController,
	banPlaceController,
	addLocationController,
} = require("../controllers/place.controller.ts");
const { ROLES, checkRoleAuth } = require("./middlewares/authorization.js");

const router = Router();

export const f = {};

router.get("/places", getAllPlacesController);
router.post("/places", createPlaceController);
router.post(
	"/placereviews",
	checkRoleAuth([ROLES.admin, ROLES.musicBand]),
	addPlaceReviewController,
);
router.get("/place-email/:email", getPlaceByEmailController);
router.get("/place/:id", getPlaceByIDController);
router.get("/places/names", getPlaceByNameController);
router.get("/cities", getCitiesController);
router.put("/place", updatePlaceController);
router.post("/placesdates", AddDatePlaceController);
router.put("/placesuscription", suscribedSuccessfulController);
router.put("/placesdates", DeleteAvailableDatePlaceController);
router.put("/placeDisabled", disabledPlaceController);
router.put("/banplace", banPlaceController);
router.post("/location", addLocationController);

module.exports = router;
