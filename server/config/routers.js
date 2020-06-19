const express = require("express");
const path = require("./paths");

module.exports = (app, isProduction) => {
  const router = new express.Router();
  const htmlFile = path.indexHtML;

  if (isProduction) {
    router.all("*", (req, res) => {
      res.sendFile(htmlFile);
    });
  } else {
    router.all("*", (req, res) => {
      res.sendFile(htmlFile);
    });
  }

  app.use("/api/events", require("../api/events"));
  app.use("/api/books", require("../api/books"));

  app.use(router);
};