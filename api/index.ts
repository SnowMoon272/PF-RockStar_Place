const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");

const server = express();
const cors = require("cors");

server.name = "API";

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

server.listen(3001, () => {
  console.log("%s listening at 3001");
});

module.exports = server;
