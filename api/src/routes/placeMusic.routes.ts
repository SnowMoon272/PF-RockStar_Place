const { Router } = require('express');

const {
	addPendingDateController,
	removePendingDateController,
	addConfirmedDateController,
} = require('../controllers/combined.controller.ts');

const router = Router();

export const f = {};

router.post('/pendingdates', addPendingDateController);
router.delete('/pendingdates', removePendingDateController);
router.put('/matchdate', addConfirmedDateController);

module.exports = router;
