import express from "express";
import expressWinston from "express-winston";
import router from "server/app/http/router";
import logger from "shared/log";

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
