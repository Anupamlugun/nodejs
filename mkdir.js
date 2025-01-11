const fs = require("fs");

const folderName = "demo";

if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
  console.log(`${folderName} file is created`);
} else {
  console.log("folder already exist");
}

console.log(fs.readdirSync(folderName));
