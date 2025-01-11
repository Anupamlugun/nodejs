const express = require("express");
const app = express();

app.get(
  "/",
  (req, res, next) => {
    //res.send("First callback");
    next();
  },
  (req, res) => {
    res.send("Second callback");
  }
);

app.listen(9000, () => {
  console.log("App is running on port 9000");
});
