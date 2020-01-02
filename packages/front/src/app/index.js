import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "app/components/App";

ReactDOM.hydrate(
  <BrowserRouter forceRefresh>
    <App />
  </BrowserRouter>,
  document.getElementById("root"),
);
