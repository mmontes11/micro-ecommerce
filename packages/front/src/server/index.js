import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import ContainerApp from "components/App";
import { matchRoute } from "http/routes";

const PORT = process.env.ME_FRONT_PORT || 8080;
const app = express();

app.get("*", (req, res) => {
  const matchedRoute = matchRoute(req.url);
  const context = {};
  const containerHtml = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <ContainerApp />
    </StaticRouter>,
  );
  const indexFile = path.resolve("./public/index.html");
  fs.readFile(indexFile, "utf8", (err, indexData) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    let data = indexData.replace('<div id="root"></div>', `<div id="root">${containerHtml}</div>`);
    if (!matchedRoute) {
      return res.send(data);
    }
    if (matchedRoute.redirect) {
      return res.redirect(matchedRoute.redirect);
    }
    if (matchedRoute.content) {
      data = data.replace('<div id="content"></div>', matchedRoute.content);
    }
    return res.send(data);
  });
});

app.use(express.static("./public"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
