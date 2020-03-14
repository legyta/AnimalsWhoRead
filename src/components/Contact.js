import React, { Component } from "react";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./stylesheets/Contact.scss";
import Paw from "./Paw.svg";
import NavBar from "./NavBar";
import SideDrawer from "./SideDrawer";
import BackDrop from "./BackDrop";

class Contact extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="App" style={{ height: "100%" }}>
        <Link to="/contact"></Link>
        <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        <div className="contacts-page" id="contact">
          <div className="top-logo-paw">
            <div className="circle--corner-contact-a">
              <img src={Paw} alt="paw" />
            </div>
            <div className="circle--corner-contact-b">
              <img src={Paw} alt="paw" />
            </div>
          </div>

          <div className="about-paws">
            <div>
              <h1 id="about-pawh"> About Paws </h1>
            </div>
            <div className="frame--mission--contact">
              <div className="row">
                <p className="contact-p">
                  Not all stinky humans are bad! There are humans out there who
                  want to help animals to stand for their rights! That is why we
                  have worked hard to provide this one and only website for
                  Animals Who Read. By doing so - we believe that we empower
                  animals to have access to the news. Which in turn means -
                  empowering animals to act! We aim to provide a platform for
                  Animals where they can feel connected, express their feelings
                  and thoughts and most important - learn about what other
                  animals are up to. If you would like to contact us, or if you
                  would like to see more things in this website - please reach
                  out! We are open and verry happy to help!
                </p>
              </div>
            </div>
          </div>
          <div className="button-contact-group">
            <button className="active-article__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
