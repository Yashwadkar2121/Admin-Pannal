const mongoose = require("mongoose");

// const URI = "mongodb://localhost:27017/Admin_Panal";
// mongoose.connect(URI)

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
