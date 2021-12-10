const express = require("express");
const app = express();
const PORT = 3001;
const Soldier = require("../db/Soldier");
// eslint-disable-next-line no-unused-vars
const db = require("../db/index"); // need this to connect to mongo db

app.use(express.json());

app.get("/tryme", (req, res) => {
  res.status(200).send("Hello There");
});

app.get("/soldiers", (req, res) => {
  Soldier.find()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send("Error getting data"));
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
