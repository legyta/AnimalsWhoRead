import React from "react";
import "./stylesheets/navbar.scss";
import ToggleButton from "../ToggleButton.js

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

  // <nav className="navbar navbar-expand-md navbar-light bg-light">
  //   <div className="container">
  //     <a className="navbar-brand" href="/home">
  //       Animals Who Fight
  //     </a>
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-toggle="collapse"
  //       data-target="#navbarNav"
  //       aria-controls="navbarNav"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarNav">
  //       <ul className="navbar-nav ml-auto">
  //         <li className="nav-item active">
  //           <a className="nav-link" href="/Home">
  //             Home
  //           </a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="/survey">
  //             Extinction
  //           </a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="/contact">
  //             Humans Who Help
  //           </a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="/fun">
  //             Animals have Fun
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
);

export default NavBar;
