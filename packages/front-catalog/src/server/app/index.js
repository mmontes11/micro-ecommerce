import express from "express";
import expressWinston from "express-winston";
import logger from "helpers/log";
import { render } from "helpers/ssr";

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

app.get("*", (req, res) => {
  const html = render();
  return res.send(html);
});

export default app;
