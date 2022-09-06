// import { any, any } from "express";

const express = require("express");

export const f = {};

const mercadopago = require("mercadopago");

mercadopago.configure({
	access_token: "TEST-2008030907073777-082315-afe1ae7f4b90cc0cb186397d52cd83f6-1184744317",
});

const checkOutController = async (req: any, res: any) => {
	try {
		let preference = {
			items: [
				{
					title: "Suscripcion RockStar place",
					quantity: 1,
					unit_price: 500,
				},
			],
			back_urls: {
				failure: "https://pf-rock-star-place.vercel.app/suscripcionerror",
				pending: "https://pf-rock-star-place.vercel.app/suscripcionerror",
				success: "https://pf-rock-star-place.vercel.app/suscripcionsuccess",
			},
			auto_return: "approved",
		};
		mercadopago.preferences.create(preference).then(function (response: any) {
			res.redirect(response.body.init_point);
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = { checkOutController };
