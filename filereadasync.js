const fs = require("fs");
fs.readFile("public/example.txt", "utf8", (error, data) => {
  if (error) {
    console.error("error in reading file", error);
    return;
  }
  console.log(data);
});
