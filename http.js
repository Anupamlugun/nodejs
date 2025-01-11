const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
    <h1>Hello World</h1>
    This is the current URL: ${req.url}
  `);
  })
  .listen(3000, "localhost", () => {
    console.log("Server is running on port 3000");
  });
