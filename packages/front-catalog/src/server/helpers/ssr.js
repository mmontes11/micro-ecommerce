import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "components/App";
import config from "common/config";

export const render = () => {
  const app = ReactDOMServer.renderToString(<App />);
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Catalog</title>
        <link rel="icon" href="${config.FRONT_CATALOG_URL}/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
      </head>
      <body>
        <div id="root">${app}</div>
        <script src="${config.FRONT_CATALOG_URL}/bundle.js"></script>
      </body>
    </html>
  `;
};