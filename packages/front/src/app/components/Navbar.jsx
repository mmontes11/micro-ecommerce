import React from "react";
import { Container, Menu, Icon } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import routes from "app/http/routes";

const { Item } = Menu;

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
