import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Container } from "semantic-ui-react";
import Navbar from "components/Navbar";
import { usePreloadedState } from "context/preloadedState";
import ReactHtmlParser from "react-html-parser";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: whitesmoke;
  }
`;

const Content = styled(Container)`
  margin-top: 3em;
  martin-bottom: 3em;
`;

const App = () => {
  const { content } = usePreloadedState();
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {content && <Content>{ReactHtmlParser(content)}</Content>}
    </>
  );
};

export default App;
