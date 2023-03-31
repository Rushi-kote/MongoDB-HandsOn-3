const express = require("express");
const morgan = require("morgan");
const ROUTER = require("./Router/router");
const app = express();

app.use(express.json());

app.use("/",ROUTER);


module.exports = app;