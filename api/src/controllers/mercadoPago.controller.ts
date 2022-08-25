import { Request, Response } from "express";

const mercadopago = require("mercadopago");

mercadopago.configure({
	access_token: "TEST-2008030907073777-082315-afe1ae7f4b90cc0cb186397d52cd83f6-1184744317",
});

const checkOutController = async (req: Request, res: Response) => {
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
				failure: "http://localhost:3000/suscripcionerror",
				pending: "http://localhost:3000/suscripcionerror",
				success: "http://localhost:3000",
			},
			auto_return: "approved",
		};
		mercadopago.preferences.create(preference).then(function (response: any) {
			res.redirect(response.body.init_point);
			console.log(response);
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = { checkOutController };
