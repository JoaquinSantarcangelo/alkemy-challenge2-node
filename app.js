const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
// const cors = require("cors");

// var corsOptions = {
//   origin: "http://localhost:8000",
// };
// app.use(cors(corsOptions));

// Set up express app
const app = express();

const http = require("http");

// Log requests to console.
app.use(logger("dev"));

// Parse requests
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Test route
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Hello World",
  })
);

const port = process.env.PORT || 8000;
app.set("port", port);
const server = http.createServer(app);
server.listen(port);

module.exports = app;
