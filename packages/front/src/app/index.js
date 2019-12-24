import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import { BrowserRouter } from "react-router-dom";
import { PreloadedStateProvider } from "context/preloadedState";

ReactDOM.hydrate(
  <PreloadedStateProvider>
    <BrowserRouter forceRefresh>
      <App />
    </BrowserRouter>
  </PreloadedStateProvider>,
  document.getElementById("root"),
);
