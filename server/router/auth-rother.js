// In Express.js, express.Router() is a mini Express application without all the server configuration but with the ability to define routes,middleware,and even have its own set of route handlers. It allows you to modularize your routes and middleware to keep your code organizes and maintainable.

// Use the express.Router class to create modular mountable route handlers. A Router instance is complete middleware and routing system; for this reasone, it is often referred to as a "mini-app".

const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/auth-controllers");

// Method 1
// router.get("/", (req, res) => {
//   res.send("Hello World!.Start a MERN Home Page ");
// });

// Method 2 :- this is most use
router.route("/").get(authControllers.home);

// Method 2 :- this is most use
router.route("/register").get(authControllers.register);

module.exports = router;
