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
router.get("/place/:id", getPlaceByIDController);
router.get("/places/names", getPlaceByNameController);
router.get("/cities", getCitiesController);
router.put("/place", updatePlaceController);
router.post("/placesdates", AddDatePlaceController);
router.put("/placesdates", DeleteAvailableDatePlaceController);
router.put("/placesuscription", suscribedSuccessfulController);

module.exports = router;
