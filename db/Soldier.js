import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const soldierSchema = new Schema({
  id: Number,
  rank: String,
  sex: String,
  startDate: String,
  phone: Number,
  email: String,
  superior: String,
});

const Soldier = model("solider", soldierSchema);

export default Soldier;
