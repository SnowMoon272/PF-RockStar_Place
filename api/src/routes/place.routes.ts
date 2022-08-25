const { Router } = require("express");
const {
	getAllPlacesController,
	createPlaceController,
	addPlaceReviewController,
	getPlaceByIDController,
	getPlaceByNameController,
	getCitiesController,
	AddDatePlaceController,
	DeleteDatePlaceController,
} = require("../controllers/place.controller");

const router = Router();

export const f = {};

router.get("/places", getAllPlacesController);
router.post("/places", createPlaceController);
router.post("/placereviews", addPlaceReviewController);
router.get("/place/:id", getPlaceByIDController);
router.get("/places/names", getPlaceByNameController);
router.get("/cities", getCitiesController);
router.post("/placesdates", AddDatePlaceController);
router.delete("/placesdates", DeleteDatePlaceController);

module.exports = router;
