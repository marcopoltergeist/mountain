import React from "react";
import Logo from "./Logo";
import Nav from "./home/Nav";

import "../style/Header.css";

function Header() {
  return (
    <div className="header_home_page">
      <Logo />
      <Nav />
    </div>
  );
}

export default Header;
