const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/us_army");

const db = mongoose.connection
  .once("open", () => console.log("Connected to Mongo"))
  .on("error", () => console.log("Cant connect to Mongo DB"));

module.exports = db;
