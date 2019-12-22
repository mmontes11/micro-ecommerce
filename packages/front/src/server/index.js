import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import ContainerApp from "../app/components/App";

const PORT = process.env.ME_FRONT_PORT || 8080;
const app = express();

app.use(express.static("./public"));

app.get("/*", (req, res) => {
  const containerHtml = ReactDOMServer.renderToString(<ContainerApp />);
  const index = path.resolve("./public/index.html");
  fs.readFile(index, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    return res.send(data.replace('<div id="root"></div>', `<div id="root">${containerHtml}</div>`));
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
