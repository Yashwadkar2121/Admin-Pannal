// In an Express.js application, a "Controller" refers to to a part of your code that is responsible for handing the application logic.
// Controllers are typically used to process incoming requests, interact with models(data sources), and send responses back to clients.
// They help organize your application by separating concerns and following the MVC (Model-View-Controllers) design pattern.
const User = require("../models/user-model");

// Home Logic
const home = async (req, res) => {
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
    // if user exist  send this response
    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }
    // here user is created
    const userCreated = await User.create({ username, email, phone, password });

    res.json({
      msg: "Registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(400).json({ msg: "Internal Sever Error" });
  }
};

// Login Logic

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Checking Email Exist Or Not
    const userExist = await User.findOne({ email });
    // if user exist  send this response
    if (!userExist) {
      return res.status(500).json({ message: "Invalid Credentials" });
    }
    // Password is compareing
    const user = await userExist.passwordCompare(password);

    if (user) {
      res.status(200).json({
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
