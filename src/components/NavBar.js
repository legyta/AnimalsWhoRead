import React from "react";
import "./stylesheets/navbar.scss";
import ToggleButton from "./ToggleButton.js";

const NavBar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <ToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/">Animals Who Fight</a>
      </div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/survey">Extinction</a>
          </li>
          <li>
            <a href="/contact">Humans Who Help</a>
          </li>
          <li>
            <a href="/fun">Animals have Fun</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
