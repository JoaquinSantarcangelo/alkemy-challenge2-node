const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const router = require("./routes/post.routes.js");
const db = require("./models");
const http = require("http");

// Set up express app
const app = express();

// Log requests to console.
app.use(logger("dev"));

//Post Routes
app.use("/api/posts", router);

//Cords
var corsOptions = {
  origin: "http://localhost:8000",
};

app.use(cors(corsOptions));

// Parse requests
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Test route
app.get("/", (req, res) =>
  res.status(200).send({
    message: "Hello World",
  })
);

//Server Init
const port = process.env.PORT || 8000;
app.set("port", port);

const server = http.createServer(app);
server.listen(port);

//Sequelize Sync
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

//Check Connection to DB
db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Could not connect");
  });

module.exports = app;
