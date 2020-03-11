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
import NavBar from "./NavBar";

const Fun = props => (
  <section id="fun">
    <NavBar />
    <header className="header-fun">
      <h1>Animals have Fun !</h1>
    </header>
    <div className="all-arrows">
      <img src={Arrow} alt="arrow" className="arrow-fun" />
      <img src={Arrow} alt="arrow" className="arrow-fun" />
      <img src={Arrow} alt="arrow" className="arrow-fun" />
    </div>
    <div className="fun-animals">
      {" "}
      {/* <div className="frame--fun"> */}
      <div className="frame--fun">
        <p>Here are some animals enjoying their time!</p>
        <div className="gif">
          {/* <div className="frame--fun"> */}
          <div className="row">
            <div className="col-md-4">
              {" "}
              <img
                src={giphy}
                alt="gif"
                className="gifs"
                height="350"
                width="350"
              />{" "}
            </div>
            <div className="col-md-4">
              <img
                src={pauk}
                alt="animal"
                className="gifs"
                height="350"
                width="350"
              />
            </div>
            <div className="col-md-4">
              {" "}
              <img
                src={animal2}
                alt="gif"
                className="gifs"
                height="350"
                width="350"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img
                src={animal3}
                alt="gif"
                className="gifs"
                height="350"
                width="350"
              />
            </div>
            <div className="col-md-4">
              <img
                src={animal4}
                alt="gif"
                className="gifs"
                height="350"
                width="350"
              />
            </div>
            <div className="col-md-4">
              {" "}
              <img
                src={cat}
                alt="gif"
                className="gifs"
                height="350"
                width="350"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img
                src={dog}
                alt="gif"
                className="gifs"
                height="350"
                width="350"
              />
            </div>
            <div className="col-md-4">
              {" "}
              <img
                src={octop}
                alt="gif"
                className="gifs"
                height="350"
                width="350"
              />
            </div>
            <div className="col-md-4">
              <img
                src={dog2}
                alt="gif"
                className="gifs"
                height="350"
                width="350"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img
                src={dog3}
                alt="gif"
                className="gifs"
                height="350"
                width="350"
              />
            </div>
            <div className="col-md-4">
              <img
                src={elef}
                alt="gif"
                className="gifs"
                height="350"
                width="350"
              />
            </div>
            <div className="col-md-4">
              <img
                src={pig}
                alt="gif"
                className="gifs"
                height="350"
                width="350"
              />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
    <div className="button-wrapper">
      <button className="active-article__button">
        <Link to="/">Go Home</Link>
      </button>
    </div>
    <footer className="survey-fun">
      <p>
        We will fight <br />
        back.
      </p>
      <span>
        © 2020 <br />
        by Aigul, Birte, Ligita,
        <br />
        Seyma
        <br />
        <br />
        #wildcodeschool
      </span>
    </footer>
  </section>
);

export default Fun;
