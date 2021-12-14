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
    .catch((err) => res.status(400).send("Error getting data", err));
});

app.get("/soldiers/:id", (req, res) => {
  const { id } = params;
  Soldier.find({id: id})
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send("Invalid id", err))
})

app.post("/soldiers", (req, res) => {
  const newSoldierData = new Soldier({
    id: req.body.id,
    image: req.body.image,
    rank: req.body.rank,
    sex: req.body.sex,
    startDate: req.body.startDate,
    phone: req.body.phone,
    email: req.body.email,
    superior: req.body.superior,
  })
  
  newSoldierData.save((err) => {
    if (err) {
      res.status(400).send("Error creating data", err)
    } else {
      newSoldierData.save()
      res.status(201).send("Succesfully created entry")
    }
  })
})

// app.put("/soldiers/:id", (req, res) => { FIX LATER
//   const { id } = params;
//   const newSoldierData = new Soldier({
//     id: req.body.id,
//     rank: req.body.rank,
//     sex: req.body.sex,
//     startDate: req.body.startDate,
//     phone: req.body.phone,
//     email: req.body.email,
//     superior: req.body.superior,
//   })
//   Soldier.find({id: id})
//     .then((data)
// })

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
