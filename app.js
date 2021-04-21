const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const http = require("http");

// Set up express app
const app = express();

// Log requests to console.
app.use(logger("dev"));

// Parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Test route
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the beginning of nothingness.",
  })
);

const port = process.env.PORT || 8000;
app.set("port", port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;
