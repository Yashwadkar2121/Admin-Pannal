const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

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
