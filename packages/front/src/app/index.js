import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.hydrate(
  <BrowserRouter forceRefresh>
    <App />
  </BrowserRouter>,
  document.getElementById("root"),
);
