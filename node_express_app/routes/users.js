const express = require("express");
const router = express.Router();

router.post("/users_details", (req, res) => {
  console.log(req.body);
  res.json(req.body); // Send the parsed body as a JSON response
});

module.exports = router;
