import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Container } from "semantic-ui-react";
import Navbar from "components/Navbar";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: whitesmoke;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <Container>
      <div id="content"></div>
    </Container>
  </>
);

export default App;
