const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./src/routes/index.ts");

// const connect = require('./src/db/db')

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

const startServer = async() => {

  try {
    await connect();
    console.log('Connected to db 🤑')
  } catch (error) {
    console.log(`Something went wrong 😭`);
    console.log(error);
  }
}
startServer();

server.listen(3001, () => {
  console.log("%s listening at 3001");
});

module.exports = server;
