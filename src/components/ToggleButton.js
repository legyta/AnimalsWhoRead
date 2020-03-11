import React from "react";
import "./stylesheets/togglerButton.scss";

const ToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <span className="toggle-button_line"></span>
    <span className="toggle-button_line"></span>
    <span className="toggle-button_line"></span>
  </button>
);

export default ToggleButton;
