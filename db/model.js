/* eslint-disable no-unused-vars */
const db = require("./index"); // need this to connect to mongo db
const Soldier = require("./Soldier");

const getSoldierData = (callback) => {
  Soldier.find().then((err, data) =>
    err ? callback(null, err) : callback(null, data)
  );
};

const deleteSoldierData = (id, callback) => {
  Soldier.findOneAndDelete({ soldierId: id }, (err, data) => {
    err ? callback(null, err) : callback(null, data);
  });
};

module.exports = {
  getSoldierData,
  deleteSoldierData,
};
