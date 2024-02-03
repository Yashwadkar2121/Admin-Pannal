// In an Express.js application, a controller refers to a part of your code that is responsible for handling the application's logic. Controllers are typically used to process incoming requests, interact with models(data source), and send responses back to clients. They help organize ypur application by separating concerns and following the MVC (Model-View-Controller) design pattern.

const home = (req, res) => {
  try {
    res.send("Hello World!.Start a MERN Home Page. ");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    res.json({ message: req.body });
  } catch (error) {
    res.json({ msg: "Page Not Found" });
  }
};
module.exports = { home, register };
