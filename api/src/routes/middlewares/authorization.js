const jwt = require("jsonwebtoken");
require('dotenv').config();

const SECRET = process.env.BACK_JWT_SECRET;

const createToken = async (data , time ) => {
	let token = jwt.sign(
		{
			user: data,
		},
		SECRET,
		{ expiresIn: 60 * time }
	);

	return token;
};

const verifyToken = async (token ) => {
	try {
		let decoded = await jwt.verify(token, SECRET);
		return decoded;
	} catch (error) {
		return error;
	}
};

const ROLES = {
	admin:"admin",
	musicband:"musicband",
	place:"place",
}

const checkRoleAuth = (roles) => async(req , res , next ) => {
  try {
    const token = req.headers.authorization?.split().pop();
		if(!token) return res.status(409).send({error: "You don't have authorization"});
    const tokenData = await verifyToken(token);
    if([].concat(roles).includes(tokenData.role)){
			next();
    } else {
			res.status(409).send({error : "You're not authorized"})
		}
  } catch (error) {
    return res.status(500).send({error: "Internal error"})
  }
}

module.exports = {
	checkRoleAuth,
	ROLES
}
