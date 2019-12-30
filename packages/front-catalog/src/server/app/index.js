import express from "express";
import expressWinston from "express-winston";
import logger from "helpers/log";
import router from "app/router";

const app = express();

app.use(
  expressWinston.logger({
    winstonInstance: logger,
    expressFormat: true,
    meta: true,
    colorize: true,
  }),
);

app.use(express.static("public"));

app.use("/", router);

export default app;
