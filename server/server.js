const express = require("express");
const app = express();
const port = 5000;
const router = require("./router/auth-rother");

// Mount the Router : To use the router in your main Express app,you can "mount" it at a specific URL prefix
app.use("/api/auth", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
