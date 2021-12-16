const express = require("express");
const cors = require("cors"); // bypass cors policy warning
const app = express();
const PORT = 3002;
const model = require("../db/model.js");
// eslint-disable-next-line no-unused-vars
const db = require("../db/index"); // need this to connect to mongo db
app.use(cors());
app.use(express.json()); //Used to parse JSON bodies

app.get("/tryme", (req, res) => {
  res.status(200).send("Hello There");
});

app.put("/soldiers/update/:id", (req, res) => {
  const data = req.body;
  const { id } = req.params;
  model.updateSoliderData(id, data, (err) => {
    err ? res.status(404).send(err) : res.status(200).send(data);
  });
});

app.get("/soldiers/:id", (req, res) => {
  const { id } = req.params;

  model.getOneSoldierData(id, (err, data) => {
    err ? res.status(404).send(err) : res.status(200).send(data);
  });
});

app.get("/soldiers", (req, res) => {
  model.getSoldierData((err, data) => {
    err ? res.status(404).send(err) : res.status(200).send(data);
  });
});

app.delete("/soldiers/delete/:id", (req, res) => {
  const { id } = req.params;
  model.deleteSoldierData(id, (err) => {
    err
      ? res.status(404).send(err)
      : res.status(200).send({
          Message: "Succesfully deleted data entry",
        });
  });
});

app.post("/soldiers", (req, res) => {
  const newSoldier = req.body;
  model.createSoldierData(newSoldier, (err) => {
    err
      ? res.status(400).send(err)
      : res.status(201).send({
          Message: "Succesfully created data entry",
        });
  });
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
