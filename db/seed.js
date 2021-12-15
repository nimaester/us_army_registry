const Soldier = require("./Soldier");
const faker = require("faker");
// eslint-disable-next-line no-unused-vars
const db = require("../db/index"); // need this to connect to mongo db

const randomizer = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
    .toLocaleString()
    .split(",")[0];
};

const randomRank = (min, max) => {
  const ranks = [
    "General",
    "Colonel",
    "Major",
    "Captain",
    "Liutenant",
    "Warrant Officer",
    "Sergeant",
    "Corporal",
    "Specialist",
    "Private",
  ];
  return ranks[randomizer(min, max)];
};

const randomGender = (min, max) => {
  const gender = ["M", "F"];
  return gender[randomizer(min, max)];
};

const seedDatabase = () => {
  for (let i = 0; i < 20; i++) {
    let newSoldierEntry = {
      soldierId: i,
      soldierName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      soldierPhoto: `https://7528userurl.s3-us-west-1.amazonaws.com/userImage${randomizer(
        1,
        110
      )}.jpg`,
      rank: randomRank(0, 9),
      sex: randomGender(0, 1),
      startDate: randomDate(new Date(2000, 0, 1), new Date()),
      phone: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      superior: String(randomizer(0, 19)), // random superior
    };
    if (i % 3 === 0 || i % 2 === 0) {
      newSoldierEntry.superior = "";
    }

    let newSoldier = new Soldier(newSoldierEntry);
    newSoldier.save((err) => {
      err
        ? console.log("Error Creating Data", err)
        : console.log("Success creating data");
    });
  }
};

seedDatabase();
