const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3002;
const model = require("../db/model.js");
// eslint-disable-next-line no-unused-vars
const db = require("../db/index"); // need this to connect to mongo db
app.use(cors());
app.get("/tryme", (req, res) => {
  res.status(200).send("Hello There");
});

app.get("/soldiers", (req, res) => {
  model.getSoldierData((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.delete("/soldiers/delete/:id", (req, res) => {
  const { id } = req.params;
  model.deleteSoldierData(id, (err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send({
        Message: "Succesfully deleted data entry",
      });
    }
  });
});

app.post("/soldiers", (req, res) => {
  model.createSoldierData((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send({
        Message: "Succesfully created data entry",
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
