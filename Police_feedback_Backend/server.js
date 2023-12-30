const express = require("express");
const bodyParser = require("body-parser");
const { database, properties } = require("./config");
const routes = require("./routes");
const exceptionHandler = require("./middleware/exceptionHandler");
const responseHandler = require("./middleware/responseHandler");

var app = express();
var device = require('express-device');
app.use(device.capture());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
//configure body parser

var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({
  extended: true,
});

//initialize express router
var router = express.Router();

// call the database connectivity function
database();

// configure app.use()
// app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// set assets/images as public folder
app.use(express.static("assets/images"));

// Error handling
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, token"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(`/api/v${properties.API_VERSION}`, router);
routes(router);

app.use(responseHandler);
app.use(exceptionHandler);

// intialise server
app.listen(properties.PORT, (req, res) => {
  console.log(`Server is running on ${properties.PORT} port.`);
});