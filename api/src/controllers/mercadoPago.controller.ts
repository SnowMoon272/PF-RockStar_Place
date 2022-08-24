import { Request, Response } from "express";

const mercadopago = require("mercadopago");

mercadopago.configure({
	access_token: "TEST-327784668252270-111502-15804326d49066dc62a0338984e0cffc-672708481",
});

const checkOutController = async (req: Request, res: Response) => {
	try {
		let preference = {
			items: [
				{
					title: "Suscripcion RockStar place",
					unit_price: 500,
					quantity: 1,
				},
			],
		};
		mercadopago.preferences.create(preference).then(function (response: any) {
			res.redirect(response.body.init_point);
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = { checkOutController };
