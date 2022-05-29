import React from "react";
import ButtonToggle from "../components/ButtonToggle";
import LogoMenu from "../templates/LogoMenu";
const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-inverse" id="menu">
      <section className="container">
        <LogoMenu />
        <ButtonToggle />
      </section>
    </nav>
  );
};

export default Header;
