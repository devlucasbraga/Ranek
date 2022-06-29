import React from "react";
import { Nav } from "./styled";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink className="link" to="/" end>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="contato">
            Contato
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default Header;
