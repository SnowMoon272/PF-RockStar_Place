const { Router } = require("express");
const { changePasswordController } = require("../controllers/changePasswordController.ts");

const router = Router();

export const f = {};

router.put("/changepassword", changePasswordController);

module.exports = router;
