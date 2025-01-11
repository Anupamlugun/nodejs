const fs = require("fs");
const http = require("http");

let html;
fs.readFile("./public/index.html", (err, data) => {
  if (err) {
    console.error("error in reading file");
  }
  html = data;
});

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  })
  .listen(900, "localhost", () => {
    console.log("server is running");
  });

const rs = fs.createReadStream("./public/index.html");

rs.on("open", (fd) => {
  console.log("file open", fd);
});
