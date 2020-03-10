import React from "react";
import "./stylesheets/Header.scss";
import "./stylesheets/Global.scss";
import Paw from "./images/Paw.svg";
import Panda from "./images/Panda.svg";

function Header({ handleChange, handleUserInput }) {
  return (
    <main>
      <section className="header--section">
        <div className="bg--main">
          <div></div>
          <div className="frame--main">
            <img className="panda" src={Panda} alt="panda" />
          </div>
          <div className="circle--corner">
            <img src={Paw} alt="paw" />
          </div>
          <div className="circle--corner">
            <img src={Paw} alt="paw" />
          </div>
          <div className="circle--corner">
            <img src={Paw} alt="paw" />
          </div>
          <div className="circle--corner">
            <img src={Paw} alt="paw" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Header;
