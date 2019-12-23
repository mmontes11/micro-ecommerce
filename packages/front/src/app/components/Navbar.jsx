import React from "react";
import { Container, Menu, Icon } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

const { Item } = Menu;

const Navbar = ({ location }) => (
  <Menu attached="top" borderless>
    <Container>
      <Item as={Link} to="/" header>
        <Icon name="cubes" size="big" />
        Micro Ecommerce
      </Item>
      <Item as={NavLink} to="/woman">
        Woman
      </Item>
      <Item as={NavLink} to="/man">
        Man
      </Item>
      <Item as={NavLink} to="/kids">
        Kids
      </Item>
    </Container>
  </Menu>
);

export default Navbar;
