import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Navbar from "components/Navbar";

export const render = (req, content) => {
  const navbar = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <Navbar />
    </StaticRouter>,
  );
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Micro Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
      </head>
      <body>
        <div id="root">${navbar}</div>
        <div id="content">${content}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
};
