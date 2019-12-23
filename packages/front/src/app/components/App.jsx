import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Container } from "semantic-ui-react";
import Navbar from "components/Navbar";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: whitesmoke;
  }
`;

const Content = styled(Container)`
  margin-top: 3em;
  margin-bottom: 3em;
`;

const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <Content>
      <p>Hello world!</p>
    </Content>
  </>
);

export default App;
