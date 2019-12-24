import React from "react";
import ReactDOM from "react-dom";
import Navbar from "components/Navbar";
import { BrowserRouter } from "react-router-dom";

ReactDOM.hydrate(
  <BrowserRouter forceRefresh>
    <Navbar />
  </BrowserRouter>,
  document.getElementById("root"),
);
