const User = require("../models/user-model");

// Home Logic
const home = (req, res) => {
  try {
    res.send("Hello World!.Start a MERN Home Page. ");
  } catch (error) {
    console.log(error);
  }
};

// Registration Logic
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // Checking Email Exist Or Not
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.json({ msg: "email already exists" });
    }
    const userCreated = await User.create({ username, email, phone, password });

    res.json({ msg: userCreated });
  } catch (error) {
    res.json({ msg: "Internal Sever Error" });
  }
};
module.exports = { home, register };
