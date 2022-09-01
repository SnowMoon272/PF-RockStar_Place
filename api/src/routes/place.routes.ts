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
	banPlaceController,
	sendNotificationController,
	deleteNotificationController,
} = require("../controllers/place.controller.ts");
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
router.get("/place-email/:email", getPlaceByEmailController);
router.get("/place/:id", getPlaceByIDController);
router.get("/places/names", getPlaceByNameController);
router.get("/cities", getCitiesController);
router.put(
	"/place",
	checkRoleAuth([ROLES.admin, ROLES.place]),
	updatePlaceController
);
router.post("/placesdates", AddDatePlaceController);
router.put("/placesuscription", suscribedSuccessfulController);
router.put("/placesdates", DeleteAvailableDatePlaceController);
router.put("/banplace", checkRoleAuth([ROLES.admin]), banPlaceController);
router.post(
	"/place/send/notification",
	checkRoleAuth([ROLES.admin, ROLES.musicband, ROLES.place]),
	sendNotificationController
);
router.post(
	"/place/delete/notifications",
	checkRoleAuth([ROLES.admin, ROLES.musicband, ROLES.place]),
	deleteNotificationController
);

module.exports = router;
