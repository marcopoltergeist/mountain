import React from "react";

import TitleHome from "../components/component/TitleHome";
import Nav from "../components/component/Nav";
import Logo from "../components/Logo";

import "../style/pages/HomePage.css";

import mountainBackground from "../assets/img_homepage.png";

function HomePage() {
  return (
    <div className="home_page">
      <header className="mobile_element">
        <Logo />
        <Nav />
      </header>
      <main>
        <div className="mobile_element">
          <img src={mountainBackground} alt="montagne-lac" />
          <TitleHome />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
