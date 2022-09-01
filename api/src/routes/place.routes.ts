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
	switchController,
	getNotificationsController,
	deleteOneController,
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

//Revisar restricción
router.post("/places/notification/send", sendNotificationController);
//Revisar restricción
router.post("/places/notifications/deleteAll", deleteNotificationController);

// Working
router.put("/places/notification/switchn", switchController);

// Working
router.get("/places/notifications", getNotificationsController);

router.delete("/places/notifications/deleteOne", deleteOneController)


module.exports = router;
