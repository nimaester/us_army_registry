let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const soldierSchema = new Schema({
  id: Number,
  rank: String,
  sex: String,
  startDate: String,
  phone: Number,
  email: String,
  superior: String,
});

const Soldier = mongoose.model("soldier", soldierSchema);

module.exports = Soldier;
