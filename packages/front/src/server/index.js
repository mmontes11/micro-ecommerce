import "@babel/polyfill";
import "isomorphic-fetch";
import express from "express";
import httpStatus from "http-status";
import { matchRoute } from "http/routes";
import { getHtmlContent } from "http/request";
import { render } from "helpers/ssr";

const PORT = process.env.FRONT_PORT;
const app = express();

app.use(express.static("public"));

app.get("*", async (req, res) => {
  const matchedRoute = matchRoute(req.url);
  let content;
  if (matchedRoute) {
    const { redirect, url } = matchedRoute;
    if (redirect) {
      return res.redirect(redirect);
    }
    try {
      const html = await getHtmlContent(url);
      content = html;
    } catch (err) {
      return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  const html = render(req, content);
  return res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
