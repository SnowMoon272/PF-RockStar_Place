const { Router } = require("express");

const {
	getNotificationsController,
	addNotificationController,
	switchController,
	deleteOneController,
	deleteNotificationController,
	createAdminController,
} = require("../controllers/admin.controller");

const router = Router();
export const f = {};

router.post("/admins/notifications", getNotificationsController);
router.post("/admins/notification/add", addNotificationController);
router.post("/admin", createAdminController);
router.put("/admins/notification/switchn", switchController);
router.post("/admins/notifications/deleteOne", deleteOneController);
router.post("/admins/notifications/deleteAll", deleteNotificationController);

module.exports = router;
