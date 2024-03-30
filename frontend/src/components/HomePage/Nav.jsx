import React from "react";
import { Link } from "react-router-dom";
import "../../style/Nav.css";

function Nav() {
  return (
    <section>
      <ul>
        <li>
          <Link to="/mountain">Mountain</Link>
        </li>

        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </section>
  );
}

export default Nav;
