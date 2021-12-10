const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/tryme", (req, res) => {
  res.status(200).send("Hello There");
});

app.get("/soldiers", (req, res) => {
  res.status(200).send(); // add database here
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
