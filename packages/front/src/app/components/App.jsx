import React from "react";
import { createGlobalStyle } from "styled-components";
import Router from "app/components/Router";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: whitesmoke !important;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Router />
  </>
);

export default App;
