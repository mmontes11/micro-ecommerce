import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Grid, Icon, Message, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const { Column } = Grid;
const { Content } = Message;

const GlobalStyle = createGlobalStyle`
  #root {
    height: 100%;
  }
`;
const StyledGrid = styled(Grid)`
  height: 100%;
  background-color: whitesmoke !important;
`;
const StyledHeader = styled(Message.Header)`
  margin-bottom: 1em !important;
`;

const NotFound = () => (
  <>
    <GlobalStyle />
    <StyledGrid verticalAlign="middle">
      <Column textAlign="center">
        <Grid stackable columns={3} centered>
          <Column textAlign="center">
            <Message color="red" icon>
              <Icon name="search" />
              <Content>
                <StyledHeader>Oops! We couldn't find what you was looking for.</StyledHeader>
                <Button as={Link} to="/">
                  <Icon name="cubes" /> Go Home
                </Button>
              </Content>
            </Message>
          </Column>
        </Grid>
      </Column>
    </StyledGrid>
  </>
);

export default NotFound;
