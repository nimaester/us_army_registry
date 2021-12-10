const mongoose = require("mongoose");
const { Soldier } = require("./Soldier");

mongoose.connect("mongodb://localhost/us_army", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => console.log("Connected to Mongo"))
  .on("error", () => console.log("Cant connect to Mongo DB"));

for (let i = 0; i < 4; i++) {
  let newSoldierEntry = {
    id: i,
    rank: "Private",
    sex: "male",
    startDate: "today",
    phone: 999,
    email: "adfds@yahoo.com",
    superior: "This Guy",
  };

  let newSoldier = new Soldier(newSoldierEntry);
  newSoldier.save((err) => {
    err
      ? console.log("Error Creating Data", err)
      : console.log("Success creating data");
  });
}
