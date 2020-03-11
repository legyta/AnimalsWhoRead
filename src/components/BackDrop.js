import React from "react";
import "./stylesheets/backDrop.scss";

const BackDrop = props => (
  <div className="backdrop" onClick={props.click}></div>
);

export default BackDrop;
