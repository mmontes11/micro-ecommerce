import React from "react";
import { Container, Menu, Icon } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

const { Item } = Menu;

const routes = [
  {
    path: "/catalog/woman",
    name: "Woman",
  },
  {
    path: "/catalog/man",
    name: "Man",
  },
  {
    path: "/catalog/kids",
    name: "Kids",
  },
];

const Navbar = () => (
  <Menu attached="top" borderless>
    <Container>
      <Item as={Link} to="/" header>
        <Icon name="cubes" size="big" />
        Micro Ecommerce
      </Item>
      {routes.map(r => (
        <Item key={r.path} as={NavLink} to={r.path}>
          {r.name}
        </Item>
      ))}
    </Container>
  </Menu>
);

export default Navbar;
