import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/Fun.scss";
import dog from "./images/dog.gif";
import dog2 from "./images/dog2.gif";
import dog3 from "./images/dog3.gif";
import elef from "./images/elef.gif";
import pig from "./images/pig.gif";
import pauk from "./images/pauk.gif";
import animal2 from "./images/animal2.gif";
import animal3 from "./images/animal3.gif";
import animal4 from "./images/animal4.gif";
import cat from "./images/cat.gif";
import giphy from "./images/giphy.gif";
import octop from "./images/octop.gif";
import Arrow from "./images/Arrow.svg";

const Fun = props => (
  <section id="fun">
    <header className="header-fun">
      <h1>Animals have Fun !</h1>
    </header>

    <div className="fun-animals">
      {" "}
      <p>Here are some animals enjoying their time!</p>
    </div>

    <div className="all-arrows">
      <img src={Arrow} alt="arrow" className="arrow-fun" />
      <img src={Arrow} alt="arrow" className="arrow-fun" />
      <img src={Arrow} alt="arrow" className="arrow-fun" />
    </div>
    {/* <div className="frame--fun"> */}
    <div className="gif">
      {/* <div className="frame--fun"> */}
      <div className="row">
        <div className="frame--fun">
          <div className="col-md-4">
            {" "}
            <img src={giphy} alt="gif" height="350" width="350" />{" "}
          </div>
          <div className="col-md-4">
            <img src={pauk} alt="animal" height="350" width="350" />
          </div>
          <div className="col-md-4">
            {" "}
            <img src={animal2} alt="gif" height="350" width="350" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={animal3} alt="gif" height="350" width="350" />
          </div>
          <div className="col-md-4">
            <img src={animal4} alt="gif" height="350" width="350" />
          </div>
          <div className="col-md-4">
            {" "}
            <img src={cat} alt="gif" height="350" width="350" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={dog} alt="gif" height="350" width="350" />
          </div>
          <div className="col-md-4">
            {" "}
            <img src={octop} alt="gif" height="350" width="350" />
          </div>
          <div className="col-md-4">
            <img src={dog2} alt="gif" height="350" width="350" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={dog3} alt="gif" height="350" width="350" />
          </div>
          <div className="col-md-4">
            <img src={elef} alt="gif" height="350" width="350" />
          </div>
          <div className="col-sm-4">
            {" "}
            <img src={pig} alt="gif" height="350" width="350" />
          </div>
        </div>
      </div>
    </div>
    {/* </div> */}
    <div className="button-fun">
      <button className="active-article__button">
        <Link to="/">Go Home</Link>
      </button>
    </div>
  </section>
);

export default Fun;
