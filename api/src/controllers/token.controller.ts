const jwt = require("jsonwebtoken");
const jwtSecret = process.env.BACK_JWT_SECRET;
const { getMusicBand } = require("../db/models/musicBandModel.ts");
const { getPlace } = require("../db/models/placeModel.ts");

const reloadTokenController = async (req: any, res: any) => {
	const { email } = req.body;
	if (!email) return res.status(400).send({ message: "Invalid data" });
	try {
		let user = await getMusicBand(email);
		if (!user) user = await getPlace(email);
		if (!user) return res.status(400).send({ error: "User not found" });

		const token = jwt.sign(
			{
				user: {
					_id: user._id,
					email: user.email,
					role: user.role,
					name: user.name,
				},
			},
			jwtSecret,
			{ expiresIn: 60 * 60 },
		);

		return res.status(200).send(token);
	} catch (error) {
		return res.status(500).send({ error: "Internal error" });
	}
};

module.exports = {
	reloadTokenController,
};
