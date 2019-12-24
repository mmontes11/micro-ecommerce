import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "components/App";

export const render = (req, state = {}) => {
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
  );
  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>Micro-Ecommerce</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
        </head>
        <body>
          <div id="root">${app}</div>
          <script>window.__PRELOADED_STATE__ = ${JSON.stringify(state)}</script>
          <script src="/bundle.js"></script>
        </body>
    </html>
  `;
};
