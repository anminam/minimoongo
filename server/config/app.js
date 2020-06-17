const express = require("express");
const paths = require("./paths");

module.exports = (app) => {
  app.set("host", process.env.HOST || "0.0.0.0");
  app.set("port", process.env.PORT || 3003);

  if (process.env.NODE_ENV === "development") {
    app.use(require("morgan")("dev"));
  }

  //static files
  app.use(
    express.static(paths.static, {
      index: false,
    })
  );
};