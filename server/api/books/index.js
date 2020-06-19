const express = require("express");
const router = express.Router();
const fs = require("fs");
const cors = require("cors");

router.get("/", cors(), (req, res) => {
  let fsData = fs.readFileSync("server/dummy/books.json");
  res.header("Content-Type", 'application/json');
  res.send(fsData);
});

module.exports = router;