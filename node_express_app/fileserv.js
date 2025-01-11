const express = require("express");
const path = require("path");
const app = express();
//const url = path.join(__dirname, "public", "index.html");

//we can use
app.use(express.static("public"));
app
  .get("/", (req, res) => {
    //res.sendFile(url);
    res.sendFile("index.html");
  })
  .listen(3030, () => {
    console.log("app is running");
  });
