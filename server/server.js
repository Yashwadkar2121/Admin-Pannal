const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!.Start a MERN ");
});

app.get("/register", (req, res) => {
  res.send("Hello World!.Start a MERN To Register Page. ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
