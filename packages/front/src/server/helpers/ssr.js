import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "app/components/App";

export const render = (req, content) => {
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
  );
  let appContent = `
    <div id="root">${app}</div>
  `;
  if (content) {
    appContent += `
      <div id="content">${content}</div>
    `;
  }
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Micro Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
      </head>
      <body>
        ${appContent}
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
};
