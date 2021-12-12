const mongoose = require("mongoose");
const Soldier = require("./Soldier");

mongoose.connect("mongodb://localhost/us_army", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

mongoose.connection.close(function () {
   console.log('Connection has been successfully closed, see you again soon!');
   process.exit(0);
});
