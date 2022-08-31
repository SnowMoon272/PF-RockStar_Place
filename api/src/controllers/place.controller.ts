import { Request, Response } from "express";

const express = require("express");

import {
	addPlaceReview,
	createPlace,
	getAllPlaces,
	getPlaceByID,
	getPlaceByName,
	getCities,
	updatePlace,
	addDate,
	deleteAvailableDate,
	suscribedSuccessful,
	getPlace,
} from "../db/models/placeModel";

const getAllPlacesController = async (req: any, res: any) => {
	let { city, sound, dates } = req.query;
	try {
		let response = await getAllPlaces(city, sound, dates);
		if (response) {
			return res.status(200).send(response);
		} else {
			return res.status(404).send({ message: "Lugares no encontrados" });
		}
	} catch (error) {
		return res.status(500).send({ error: "Something went wrong" });
	}
};

const createPlaceController = async (req: any, res: any) => {
	const places = req.body.newPlace;
	if (places) {
		try {
			let created = await createPlace(places);
			if (created.hasOwnProperty("error"))
				return res.status(400).send({ error: "Already exist an account with this email" });
			return res.status(201).send({ message: "success" });
		} catch (error) {
			return res.status(500).send({ error: "Something went wrong" });
		}
	} else {
		return res.status(400).send({ message: "Invalid data" });
	}
};

const addPlaceReviewController = async (req: any, res: any) => {
	const { review, email } = req.body;

	if (review && email) {
		try {
			await addPlaceReview(email, review);
			return res.status(201).send({ message: "Se añadio la reseña exitosamente" });
		} catch (error) {
			return res.status(500).send({ error: "Something went wrong" });
		}
	} else {
		return res.status(400).send({ message: "Data faltante o incorrecta" });
	}
};

const getPlaceByIDController = async (req: any, res: any) => {
	const { id } = req.params;
	if (id) {
		const place = await getPlaceByID(id);
		return res.status(200).send(place);
	}

	if (!id) return res.status(404).send({ message: "Invalid data" });
};

const getPlaceByEmailController = async (req: any, res: any) => {
	const { email } = req.params;
	if (email) {
		const place = await getPlace(email);
		return res.status(200).send(place);
	}

	if (!email) return res.status(404).send({ message: "Invalid data" });
};

const getPlaceByNameController = async (req: any, res: any) => {
	let { search } = req.query;
	if (!search) return res.status(404).send({ message: "Invalid data" });
	search = decodeURI(search);
	try {
		const places = await getPlaceByName(search);
		return res.status(200).send(places);
	} catch (error) {
		return res.status(500).send({ error: "Something went wrong" });
	}
};

const getCitiesController = async (req: any, res: any) => {
	try {
		let cities = await getCities();
		if (cities) return res.status(200).send(cities);
		return res.status(500).send({ error: "Something went wrong" });
	} catch (error) {
		return res.status(500).send({ error: "Something went wrong" });
	}
};

const updatePlaceController = async (req: any, res: any) => {
	const { email, data } = req.body;
	if (data) {
		try {
			let updated = await updatePlace(email, data);
			if (updated) return res.status(201).send({ msg: "Se actualizó el lugar correctamente" });
			return res.status(400).send({ error: "Ha ocurrido un error" });
		} catch (error) {
			return res.status(500).send({ error: "No se pudo actualizar el lugar" });
		}
	} else {
		res.status(404).send({ msg: "Data faltante o incorrecta" });
	}
};

const AddDatePlaceController = async (req: any, res: any) => {
	const { email, date } = req.body;
	try {
		let newDate = await addDate(email, date);
		if (!newDate.hasOwnProperty("error"))
			return res.status(201).send({ msg: "Se añadio la fecha correctamente" });
		return res.status(400).send(newDate.error);
	} catch (error) {
		return res.status(500).send({ error: "Something went wrong" });
	}
};

const DeleteAvailableDatePlaceController = async (req: any, res: any) => {
	const { email, date } = req.body;

	try {
		let dateToDelete = await deleteAvailableDate(email, date);
		if (!dateToDelete.hasOwnProperty("error")) return res.status(201).send(dateToDelete.msg);
		return res.status(400).send(dateToDelete.error);
	} catch (error) {
		return res.status(500).send({ error: "Something went wrong" });
	}
};

const suscribedSuccessfulController = async (req: any, res: any) => {
	const { email, suscription } = req.body;
	if (email && suscription) {
		try {
			let userUpdate = await suscribedSuccessful(email, suscription);
			return res.status(200).send(userUpdate);
		} catch (error) {
			return res.status(500).send({ error: "Internal problem" });
		}
	}
	return res.status(404).send({ error: "Data faltante o incorrecta" });
};

module.exports = {
	getAllPlacesController,
	createPlaceController,
	addPlaceReviewController,
	getPlaceByIDController,
	getPlaceByNameController,
	getCitiesController,
	updatePlaceController,
	AddDatePlaceController,
	DeleteAvailableDatePlaceController,
	suscribedSuccessfulController,
	getPlaceByEmailController,
};
