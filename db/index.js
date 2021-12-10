import { connect, connection } from "mongoose";

connect("mongodb://localhost/airbnb-gallery", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to mongodb://localhost/airbnb-gallery");
});

export default db;
