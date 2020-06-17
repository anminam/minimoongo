const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const obj = {
    id: "abc",
  };
  res.send(obj);
});

module.exports = router;