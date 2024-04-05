import React from "react";

import TitleHome from "../components/home/TitleHome";

import Header from "../components/Header";

import "../style/pages/HomePage.css";

import mountainBackground from "../assets/img_homepage.png";

function HomePage() {
  return (
    <div className="home_page">
      <Header />
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
