let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const soldierSchema = new Schema({
  soldierId: {
    type: Number,
    required: true,
  },
  soldierName: {
    type: String,
    required: true,
  },
  soldierPhoto: {
    type: String,
  },
  rank: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  superior: {
    type: String,
  },
});

const Soldier = mongoose.model("soldier", soldierSchema);

module.exports = Soldier;
