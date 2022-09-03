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
} = require("../emailTemplates");

export const f = {};

const SERVICE = "gmail";
const AUTH = {
	TYPE: "OAuth2",
	USER: "rockstarplaceok@gmail.com",
	CLIENT_ID:
		"193709480522-3cfatqmpnvh1p4ut1pnmhi34d1jbunmq.apps.googleusercontent.com",
	CLIENT_SECRET: "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",
	REDIRECT_URI: "https://developers.google.com/oauthplayground",
	REFRESH_TOKEN:
		"1//04Xez4hBWpof2CgYIARAAGAQSNwF-L9IrKowoW8CKG3yWaxZD1TLuTpJAW3r0DPqWrlTtHhFD61BxYfDFq6W4gcLtyVG2XY6Q2OQ",
};

const oAuth2Client = new google.auth.OAuth2(
	AUTH.CLIENT_ID,
	AUTH.CLIENT_SECRET,
	AUTH.REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: AUTH.REFRESH_TOKEN });

const cancelMatchController = async (req: any, res: any) => {
	const musicEmail = req.params.musicEmail;
	const placeEmail = req.params.placeEmail;
	const date = req.params.date;
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
				let placeMail = {
					from: `RockStar Place <${AUTH.USER}>`,
					to: placeEmail,
					subject: "Fecha Cancelada",
					html: cancelPlaceMatchTemplate(placeName, date, bandName),
				};

				let result =
					(await transporter.sendMail(placeMail)) &&
					(await transporter.sendMail(musicMail));
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
	const date = req.params.date;
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
					(await transporter.sendMail(placeMail)) &&
					(await transporter.sendMail(musicMail));
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

module.exports = {
	bannedEmailController,
	registerMailController,
	matchMailController,
	cancelMatchController,
};
