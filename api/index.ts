const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./src/routes/index.ts");

const connect = require('./src/db/db')
const {createMusicBand, getAllMusicBands, banHandler} = require('./src/db/models/musicBandModel');

const server = express();
const cors = require("cors");

// server.name = "API";

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(morgan("dev"));
server.use((req: any, res: { header: (arg0: string, arg1: string) => void }, next: () => void) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", routes);

const newUser = {
  personInCharge : "Leonardo Davinci",
  name: 'Miley Cisuus',
	email: 'soymileycisuus@gmail.com',
	password: 'holasoymiley',
	rating: 5,
	reviews: [],
	dates: [],
	banned: false,
  role:"admin"
}

const startServer = async() => {

  try {
    await connect();
    console.log('Connected to db 🤑')
  } catch (error) {
    console.log(`Something went wrong 😭`);
    console.log(error);
  }

  // await connect().then(()=> console.log('Connected to db')).catch((err: any) => console.log(`Not connected, ${err}`))
}

const testDB = async() => {
  await createMusicBand(newUser);
  const bands = await getAllMusicBands();
  console.log(bands);
}

const executeInOrder = async () => {
  await startServer();
  await testDB();
  await banHandler("soymileycisuus@gmail.com")
  await testDB();

}

executeInOrder();

server.listen(3001, () => {
  console.log("%s listening at 3001");
});

module.exports = server;
