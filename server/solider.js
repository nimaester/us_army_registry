import { Soldier } from "../db/Soldier";

export const getSoldiers = (_id, callback) => {
  Soldier.find({ _id: _id }, (err, document) => {
    if (err) {
      console.log("err", err);
    } else {
      callback(null, document);
    }
  });
};
