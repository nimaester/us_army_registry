const express = require("express");
const app = express();
const PORT = 3001;

app.get("/tryme", (req, res) => {
  res.status(200).send("Hello There");
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
