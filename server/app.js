const express = require("express");
const logger = require("winston");

const IS_PRODUCTION = process.env.NODE_ENV === "production";
const app = express();

require("./config/app")(app);
require("./config/routers")(app, IS_PRODUCTION);

app.listen(app.get("port"), app.get("host"), (error) => {
  if (error) {
    logger.error(error);
  } else {
    logger.info(`Server is running @ ${app.get("host")}:${app.get("port")}`);
  }
});