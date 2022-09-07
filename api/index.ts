const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./src/routes/index.ts");
const passport = require("passport");
require("dotenv").config();
const cookieSession = require("cookie-session");

const connect = require("./src/db/db.ts");
const cors = require("cors");
const server = express();
require("./src/auth/auth.js");

const front = "https://pf-rock-star-place.vercel.app";

const corsOptions = {
	origin: front,
	methods: "GET, POST, PUT, DELETE",
	credentials: true,
	optionSuccessStatus: 200,
};

server.use(cors(corsOptions));

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(morgan("dev"));
server.get(
	"/",
	(req: any, res: { setHeader: (arg0: string, arg1: string) => void }) => {
		res.setHeader("Access-Control-Allow-Origin", front);
		res.setHeader("Access-Control-Allow-Credentials", "true");
		res.setHeader("Access-Control-Max-Age", "1800");
		res.setHeader("Access-Control-Allow-Headers", "content-type");
		res.setHeader(
			"Access-Control-Allow-Methods",
			"PUT, POST, GET, DELETE, PATCH, OPTIONS"
		);
	}
);

server.use(
	cookieSession({
		name: "session",
		keys: ["AAA"],
		maxAge: 24 * 60 * 60 * 100,
	})
);
server.use(passport.initialize());
server.use(passport.session());
require("./src/auth/google.js");
server.use("/", routes);

const startServer = async () => {
	try {
		await connect();
		console.log("Connected to db 🤑");
	} catch (error) {
		console.log(`Something went wrong 😭`);
		console.log(error);
	}
};
startServer();

server.listen(process.env.PORT, () => {
	console.log(`Server listening: PORT ${process.env.PORT}`);
});

module.exports = server;
