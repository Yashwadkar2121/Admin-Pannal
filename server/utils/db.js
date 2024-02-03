const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/mern-admin";
// mongoose.connect(URI);

const conectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection Successful To DB");
  } catch (error) {
    console.error("database connection failed");
    process.exit(0);
  }
};
module.exports = conectDB;
