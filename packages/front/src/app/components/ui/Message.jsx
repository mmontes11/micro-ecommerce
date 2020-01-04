import React from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import { Grid, Icon, Message as SemanticMessage, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const { Column } = Grid;
const { Content } = SemanticMessage;

const GlobalStyle = createGlobalStyle`
  #root {
    height: 100%;
  }
`;
const StyledGrid = styled(Grid)`
  height: 100%;
  background-color: whitesmoke !important;
`;
const StyledHeader = styled(SemanticMessage.Header)`
  margin-bottom: 1em !important;
`;

const Message = ({ color, icon, text }) => (
  <>
    <GlobalStyle />
    <StyledGrid verticalAlign="middle">
      <Column textAlign="center">
        <Grid stackable columns={3} centered>
          <Column textAlign="center">
            <SemanticMessage color={color} icon>
              <Icon name={icon} />
              <Content>
                <StyledHeader>{text}</StyledHeader>
                <Button as={Link} to="/">
                  <Icon name="cubes" /> Go Home
                </Button>
              </Content>
            </SemanticMessage>
          </Column>
        </Grid>
      </Column>
    </StyledGrid>
  </>
);

Message.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
