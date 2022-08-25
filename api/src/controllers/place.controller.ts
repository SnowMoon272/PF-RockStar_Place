import { Request, Response } from 'express';
import {
	addPlaceReview,
	createPlace,
	getAllPlaces,
	getPlaceByID,
	getPlaceByName,
	getCities,
} from '../db/models/placeModel';

const getAllPlacesController = async (req: any, res: any) => {
	let { city, sound } = req.query;
	try {
		let response = await getAllPlaces(city, sound);
		if (response) {
			return res.status(200).send(response);
		} else {
			return res.status(404).send({  message: 'Lugares no encontrados' });
		}
	} catch (error) {
		return res.status(500).send({ error: 'Something went wrong' });
	}
};

const createPlaceController = async (req: Request, res: Response) => {
	const places = req.body.newPlace;
	if (places) {
		try {
			let created = await createPlace(places);
			if (created.hasOwnProperty('error'))
				return res.status(400).send({ error: 'Already exist an account with this email' });
			return res.status(201).send({  message: 'success' });
		} catch (error) {
			return res.status(500).send({ error: 'Something went wrong' });
		}
	} else {
		return res.status(400).send({  message: 'Invalid data' });
	}
};

const addPlaceReviewController = async (req: Request, res: Response) => {
	const { review, email } = req.body;

	if (review && email) {
		try {
			await addPlaceReview(email, review);
			return res.status(201).send({  message: 'Se añadio la reseña exitosamente' });
		} catch (error) {
			return res.status(500).send({ error: 'Something went wrong' });
		}
	} else {
		return res.status(400).send({  message: 'Data faltante o incorrecta' });
	}
};

const getPlaceByIDController = async (req: Request, res: Response) => {
	const { id } = req.params;
	if (id) {
		const place = await getPlaceByID(id);
		return res.status(200).send(place);
	}
	if (!id) return res.status(404).send({  message: 'Invalid data' });
};

const getPlaceByNameController = async (req: any, res: Response) => {
	let { search } = req.query;
	if (!search) return res.status(404).send({  message: 'Invalid data' });
	search = decodeURI(search);
	try {
		const places = await getPlaceByName(search);
		return res.status(200).send(places);
	} catch (error) {
		return res.status(500).send({ error: 'Something went wrong' });
	}
};

const getCitiesController = async (req: Request, res: Response) => {
	try {
		let cities = await getCities();
		if (cities) return res.status(200).send(cities);
		return res.status(500).send({ error: 'Something went wrong' });
	} catch (error) {
		return res.status(500).send({ error: 'Something went wrong' });
	}
};

module.exports = {
	getAllPlacesController,
	createPlaceController,
	addPlaceReviewController,
	getPlaceByIDController,
	getPlaceByNameController,
	getCitiesController,
};
