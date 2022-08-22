const { Router } = require('express');
const {
	getAllPlacesController,
	createPlaceController,
	addPlaceReviewController,
	getPlaceByIDController,
	getPlaceByNameController,
	getCitiesController,
} = require('../controllers/place.controller');

const router = Router();

export const f = {};

router.get('/places', getAllPlacesController);
router.post('/places', createPlaceController);
router.post('/placereviews', addPlaceReviewController);
router.get('/place/:id', getPlaceByIDController);
router.get('/places/names', getPlaceByNameController);
router.get('/cities', getCitiesController);

module.exports = router;