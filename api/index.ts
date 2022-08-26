const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./src/routes/index.ts');
const passport = require('passport');
require('dotenv').config();

const connect = require('./src/db/db.ts');
const cors = require('cors');
const server = express();
require('./src/auth/auth.js');

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	optionSuccessStatus: 200,
};

server.use(cors(corsOptions));
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(morgan('dev'));
server.get('/', (req: any, res: { setHeader: (arg0: string, arg1: string) => void }) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Max-Age', '1800');
	res.setHeader('Access-Control-Allow-Headers', 'content-type');
	res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH, OPTIONS');
});

server.use('/', routes);

const startServer = async () => {
	try {
		await connect();
		console.log('Connected to db 🤑');
	} catch (error) {
		console.log(`Something went wrong 😭`);
		console.log(error);
	}
};
startServer();

const PORT = 3001;

server.listen(process.env.PORT, () => {
	console.log(`Server listening: PORT ${PORT}`);
});

module.exports = server;
