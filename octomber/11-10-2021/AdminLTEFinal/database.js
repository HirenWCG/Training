const mongoose = require("mongoose");

function connectDb() {
  mongoose
    // .connect("mongodb://localhost:27017/demo", {
    //   useNewUrlParser: true,
    // })
    .connect("mongodb://demo:demo@localhost:27017/demo", {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Database Connected...");
    })
    .catch((err) => {
      console.log("Database Not Connected...");
    });
}

connectDb();
