const { Router } = require("express");
const {
	getAllPlacesController,
	createPlaceController,
	addPlaceReviewController,
	getPlaceByIDController,
	getPlaceByNameController,
	getCitiesController,
} = require("../controllers/place.controller");
const { ROLES, checkRoleAuth } = require("./middlewares/authorization.js");

const router = Router();

export const f = {};

router.get("/places", getAllPlacesController);
router.post("/places", createPlaceController);
router.post(
	"/placereviews",
	checkRoleAuth([ROLES.admin, ROLES.musicBand]),
	addPlaceReviewController
);
router.get("/place/:id", getPlaceByIDController);
router.get("/places/names", getPlaceByNameController);
router.get("/cities", getCitiesController);

module.exports = router;
