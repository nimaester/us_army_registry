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

const createSoldierData = (data, callback) => {
  const newSoldierData = new Soldier({
    soldierId: data.soldierId,
    soldierName: data.soldierName,
    soldierPhoto: data.soldierPhoto,
    rank: data.rank,
    sex: data.sex,
    startDate: data.startDate,
    phone: data.phone,
    email: data.email,
    superior: data.superior,
  });

  newSoldierData.save().then((err, data) => {
    err ? callback(null, err) : callback(null, data);
  });
};

const getOneSoldierData = (id, callback) => {
  Soldier.findOne({ soldierId: id }, (err, data) => {
    err ? callback(null, err) : callback(null, data);
  });
};

const updateSoliderData = (id, newSoldierData, callback) => {
  Soldier.findOneAndUpdate({ soldierId: id }, newSoldierData, (err, data) => {
    err ? callback(null, err) : callback(null, data);
  });
};

module.exports = {
  getSoldierData,
  deleteSoldierData,
  createSoldierData,
  getOneSoldierData,
  updateSoliderData,
};
