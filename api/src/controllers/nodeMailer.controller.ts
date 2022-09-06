const nodeMailer = require("nodemailer");
const { google } = require("googleapis");
const { getMusicBand } = require("../db/models/musicBandModel");
const { getPlace } = require("../db/models/placeModel");

const {
	registerTemplate,
	bandMatchTemplate,
	placeMatchTemplate,
	bannedTemplate,
	cancelMusicMatchTemplate,
	cancelPlaceMatchTemplate,
	updatePasswordTemplate,
} = require("../emailTemplates");

export const f = {};

const SERVICE = "gmail";
const AUTH = {
	TYPE: process.env.TYPE,
	USER: process.env.USER,
	CLIENT_ID: process.env.CLIENT_ID,
	CLIENT_SECRET: process.env.CLIENT_SECRET,
	REDIRECT_URI: process.env.REDIRECT_URI,
	REFRESH_TOKEN: process.env.REFRESH_TOKEN,
};

const oAuth2Client = new google.auth.OAuth2(AUTH.CLIENT_ID, AUTH.CLIENT_SECRET, AUTH.REDIRECT_URI);

oAuth2Client.setCredentials({ refresh_token: AUTH.REFRESH_TOKEN });

const cancelBandController = async (req: any, res: any) => {
	const musicEmail = req.params.musicEmail;
	const placeEmail = req.params.placeEmail;
	const fecha = req.params.date;
	const year = fecha.substring(0, 4);
	const month = fecha.substring(5, 7);
	const day = fecha.substring(8, 10);
	const date = `${day}/${month}/${year}`;
	const musicUser = await getMusicBand(musicEmail);
	const placeUser = await getPlace(placeEmail);
	if (musicUser && placeUser) {
		const bandName = musicUser.name;
		const placeName = placeUser.name;

		async function sendMail() {
			try {
				let accessToken = await oAuth2Client.getAccessToken();
				let transporter = nodeMailer.createTransport({
					service: SERVICE,
					tls: { rejectUnauthorized: false },
					auth: {
						type: AUTH.TYPE,
						user: AUTH.USER,
						clientId: AUTH.CLIENT_ID,
						clientSecret: AUTH.CLIENT_SECRET,
						refreshToken: AUTH.REFRESH_TOKEN,
						accessToken: accessToken,
					},
				});
				let musicMail = {
					from: `RockStar Place <${AUTH.USER}>`,
					to: musicEmail,
					subject: "Fecha Cancelada",
					html: cancelMusicMatchTemplate(bandName, placeName, date),
				};
				let result = await transporter.sendMail(musicMail);
				return result;
			} catch (error) {
				console.log(error);
			}
		}

		sendMail()
			.then((result) => res.status(200).send("enviado"))
			.catch((error) => console.log(error.message));
	} else {
		return res.status(404).send("No se pudo enviar el email");
	}
};

const cancelPlaceController = async (req: any, res: any) => {
	const musicEmail = req.params.musicEmail;
	const placeEmail = req.params.placeEmail;
	const fecha = req.params.date;
	const year = fecha.substring(0, 4);
	const month = fecha.substring(5, 7);
	const day = fecha.substring(8, 10);
	const date = `${day}/${month}/${year}`;
	const musicUser = await getMusicBand(musicEmail);
	const placeUser = await getPlace(placeEmail);
	if (musicUser && placeUser) {
		const bandName = musicUser.name;
		const placeName = placeUser.name;

		async function sendMail() {
			try {
				let accessToken = await oAuth2Client.getAccessToken();
				let transporter = nodeMailer.createTransport({
					service: SERVICE,
					tls: { rejectUnauthorized: false },
					auth: {
						type: AUTH.TYPE,
						user: AUTH.USER,
						clientId: AUTH.CLIENT_ID,
						clientSecret: AUTH.CLIENT_SECRET,
						refreshToken: AUTH.REFRESH_TOKEN,
						accessToken: accessToken,
					},
				});
				let placeMail = {
					from: `RockStar Place <${AUTH.USER}>`,
					to: placeEmail,
					subject: "Fecha Cancelada",
					html: cancelPlaceMatchTemplate(placeName, date, bandName),
				};

				let result = await transporter.sendMail(placeMail);

				return result;
			} catch (error) {
				console.log(error);
			}
		}

		sendMail()
			.then((result) => res.status(200).send("enviado"))
			.catch((error) => console.log(error.message));
	} else {
		return res.status(404).send("No se pudo enviar el email");
	}
};

const matchMailController = async (req: any, res: any) => {
	const musicEmail = req.params.musicEmail;
	const placeEmail = req.params.placeEmail;
	const fecha = req.params.date;
	const year = fecha.substring(0, 4);
	const month = fecha.substring(5, 7);
	const day = fecha.substring(8, 10);
	const date = `${day}/${month}/${year}`;
	const musicUser = await getMusicBand(musicEmail);
	const placeUser = await getPlace(placeEmail);

	if (musicUser && placeUser) {
		const bandName = musicUser.name;
		const placeName = placeUser.name;

		async function sendMail() {
			try {
				let accessToken = await oAuth2Client.getAccessToken();
				let transporter = nodeMailer.createTransport({
					service: SERVICE,
					tls: { rejectUnauthorized: false },
					auth: {
						type: AUTH.TYPE,
						user: AUTH.USER,
						clientId: AUTH.CLIENT_ID,
						clientSecret: AUTH.CLIENT_SECRET,
						refreshToken: AUTH.REFRESH_TOKEN,
						accessToken: accessToken,
					},
				});
				let musicMail = {
					from: `RockStar Place <${AUTH.USER}>`,
					to: musicEmail,
					subject: "Fecha confirmada",
					html: bandMatchTemplate(bandName, date, placeName),
				};
				let placeMail = {
					from: `RockStar Place <${AUTH.USER}>`,
					to: placeEmail,
					subject: "Fecha confirmada",
					html: placeMatchTemplate(placeName, bandName, date),
				};

				let result =
					(await transporter.sendMail(placeMail)) && (await transporter.sendMail(musicMail));
				return result;
			} catch (error) {
				console.log(error);
			}
		}

		sendMail()
			.then((result) => res.status(200).send("enviado"))
			.catch((error) => console.log(error.message));
	} else {
		return res.status(404).send("No se pudo enviar el email");
	}
};

const bannedEmailController = async (req: any, res: any) => {
	const { email } = req.params;
	console.log(email);
	let user = await getPlace(email);
	if (!user) user = await getMusicBand(email);

	if (user) {
		async function sendMail() {
			try {
				let accessToken = await oAuth2Client.getAccessToken();
				let transporter = nodeMailer.createTransport({
					service: SERVICE,
					tls: { rejectUnauthorized: false },
					auth: {
						type: AUTH.TYPE,
						user: AUTH.USER,
						clientId: AUTH.CLIENT_ID,
						clientSecret: AUTH.CLIENT_SECRET,
						refreshToken: AUTH.REFRESH_TOKEN,
						accessToken: accessToken,
					},
				});
				let mailOptions = {
					from: `RockStar Place <${AUTH.USER}>`,
					to: email,
					subject: "Hemos suspendido tu cuenta",
					html: bannedTemplate(user.name),
				};
				console.log(email);

				let result = await transporter.sendMail(mailOptions);
				return result;
			} catch (error) {
				console.log(error);
			}
		}
		sendMail()
			.then((result) => res.status(200).send("enviado"))
			.catch((error) => console.log(error.message));
	} else {
		return res.status(404).send("No se pudo enviar el email");
	}
};

const registerMailController = async (req: any, res: any) => {
	const { email } = req.params;
	console.log(email);
	if (email) {
		async function sendMail() {
			try {
				let accessToken = await oAuth2Client.getAccessToken();
				let transporter = nodeMailer.createTransport({
					service: SERVICE,
					tls: { rejectUnauthorized: false },
					auth: {
						type: AUTH.TYPE,
						user: AUTH.USER,
						clientId: AUTH.CLIENT_ID,
						clientSecret: AUTH.CLIENT_SECRET,
						refreshToken: AUTH.REFRESH_TOKEN,
						accessToken: accessToken,
					},
				});
				let mailOptions = {
					from: `RockStar Place <${AUTH.USER}>`,
					to: email,
					subject: "Registro exitoso",
					html: registerTemplate(email),
				};
				console.log(email);

				let result = await transporter.sendMail(mailOptions);
				return result;
			} catch (error) {
				console.log(error);
			}
		}
		sendMail()
			.then((result) => res.status(200).send("enviado"))
			.catch((error) => console.log(error.message));
	} else {
		return res.status(404).send("No se pudo enviar el email");
	}
};

const updatePasswordMailController = async (req: any, res: any) => {
	const { email } = req.params;
	if (email) {
		async function sendMail() {
			try {
				let accessToken = await oAuth2Client.getAccessToken();
				let transporter = nodeMailer.createTransport({
					service: SERVICE,
					tls: { rejectUnauthorized: false },
					auth: {
						type: AUTH.TYPE,
						user: AUTH.USER,
						clientId: AUTH.CLIENT_ID,
						clientSecret: AUTH.CLIENT_SECRET,
						refreshToken: AUTH.REFRESH_TOKEN,
						accessToken: accessToken,
					},
				});
				let mailOptions = {
					from: `RockStar Place <${AUTH.USER}>`,
					to: email,
					subject: "Cambio de contraseña",
					html: updatePasswordTemplate(email),
				};

				let result = await transporter.sendMail(mailOptions);
				return result;
			} catch (error) {
				console.log(error);
			}
		}
		sendMail()
			.then((result) => res.status(200).send("enviado"))
			.catch((error) => console.log(error.message));
	} else {
		return res.status(404).send("No se pudo enviar el email");
	}
};

module.exports = {
	bannedEmailController,
	registerMailController,
	matchMailController,
	cancelBandController,
	updatePasswordMailController,
	cancelPlaceController,
};
