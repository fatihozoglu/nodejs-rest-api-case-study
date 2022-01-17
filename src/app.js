const express = require("express");
const cors = require("cors");
var compression = require("compression");
const routes = require("./routes/recordRouter");
const helmet = require("helmet");
require("dotenv").config();

// Create express web server instance
const app = express();

// Middleware for adding HTTP Headers for preventing from web vulnerabilities
app.use(helmet());
// Middleware for compressing the responses
app.use(compression());
// Middleware for allowing cross-origin resource sharing
app.use(cors());
// Middleware for parsing incoming json data
app.use(express.json());

app.use("/api", routes);
// Handle any other request
app.use("/*", (req, res) => {
  res.status(404).json({ code: 2, msg: "Resource Not Found" });
});

module.exports = app;
