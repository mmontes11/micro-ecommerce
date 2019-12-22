import React from "react";
import { Container, Menu, Icon } from "semantic-ui-react";

const { Item } = Menu;

const Navbar = () => (
  <Menu attached="top" borderless>
    <Container>
      <Item as="a" href="/" header>
        <Icon name="cubes" size="big" />
        Micro Ecommerce
      </Item>
      <Item as="a">Woman</Item>
      <Item as="a">Man</Item>
      <Item as="a">Kids</Item>
    </Container>
  </Menu>
);

export default Navbar;
