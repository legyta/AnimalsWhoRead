import React from "react";
import "./stylesheets/sideDrawer.scss";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
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
    </nav>
  );
};

export default SideDrawer;
