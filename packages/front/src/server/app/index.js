import express from "express";
import expressWinston from "express-winston";
import httpStatus from "http-status";
import { matchRoute } from "app/http/routes";
import { getHtmlContent } from "helpers/request";
import { render } from "helpers/ssr";
import logger from "helpers/log";

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

app.get("*", async (req, res) => {
  const matchedRoute = matchRoute(req.url);
  if (matchedRoute) {
    const { redirect, url } = matchedRoute;
    if (redirect) {
      return res.redirect(redirect);
    }
    try {
      const content = await getHtmlContent(url);
      const html = render(req, content);
      return res.send(html);
    } catch (err) {
      logger.error(err);
      return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  return res.sendStatus(httpStatus.NOT_FOUND);
});

export default app;
