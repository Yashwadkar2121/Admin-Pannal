const User = require("../models/user-model");
var bcrypt = require("bcryptjs");

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

    res.json({
      msg: "Registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.json({ msg: "Internal Sever Error" });
  }
};

// Login

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(500).json({ message: "Invalid Credentials" });
    }

    const user = await userExist.passwordCompare(password);

    if (user) {
      res.status(201).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.json({ msg: "Internal Sever Error" });
  }
};
module.exports = { home, register, login };
