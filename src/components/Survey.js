import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./stylesheets/Survey.scss";
import frame from "./images/frame.svg";
import NavBar from "./NavBar";
import SideDrawer from "./SideDrawer";
import BackDrop from "./BackDrop";

function submitMessage() {
  alert("You're great! Thanks for Participating!");
}

class Survey extends Component {
  handleSubmitted = ({ res, fields, form }) => {
    form.reset(); // resets "username" field to "admin"
  };

  state = {
    sideDrawerOpen: false,
    input: ""
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
      <div id="survey" className="survey-section" style={{ height: "100%" }}>
        <Link to="/survey"></Link>
        <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <img src={frame} alt="frame" className="frame" />
        <div className="survey-title-description">
          <div className="survey-title">
            <h1>Feelings about Extinction</h1>
          </div>
          <div className="description">
            <p className="survey-p">
              Greetings to animals sharing their feelings here
            </p>
          </div>
        </div>

        <div className="survey-contact">
          <div className="survey-name">
            <label htmlFor="text" id="name-label">
              How are you called
            </label>

            <input
              className="surveyContact-input"
              type="survey-text"
              id="survey-name"
              name="name"
              placeholder="your species name"
              required
            />
          </div>
          {/* email  */}
          <div className="survey-email">
            <label htmlFor="email" id="email-label">
              What is your email
            </label>

            <input
              className="surveyContact-input"
              type="survey-email"
              id="email-input"
              name="email"
              placeholder="if you have one"
              pattern="[^ @]*@[^ @]*"
            />
          </div>
          {/* age */}
          <div className="survey-age">
            <label htmlFor="number" id="number-label">
              Years on the planet
            </label>

            <input
              className="surveyContact-input"
              type="survey-number"
              id="number"
              name="number"
              placeholder="age"
              min="0"
              max="100"
            />
          </div>
        </div>
        <div className="dropdown-list">
          <label className="dropdown-title">
            How do you feel about Extinction?
          </label>
          <select className="dropdown">
            <option value="current">Choose what you relate most to</option>
            <option value="first-choice">
              I am very afraid! I already store food and think of new possible
              shelter.
            </option>
            <option value="second-choice">We have a plan to fight it!</option>
            <option value="third-choice">
              I am scared, but I don't care. My elders also got extincted.
            </option>
            <option value="fourth-choice">
              Huh? What is that? Did I sleep for too long again. Need to catch
              up on the news!
            </option>
            <option value="fifth-choice">Prefer not to answer.</option>
          </select>
        </div>
        <div className="radio-list">
          <label className="radio-title">
            Do you know how big is your species?
          </label>
          <div className="choices">
            <div className="firstCheck">
              <input type="radio" id="first" name="name" />
              <label htmlFor="first">Only few of us left...</label>
            </div>
            <div className="secondCheck">
              <input type="radio" id="second" name="name" />
              <label htmlFor="second">I think around 736,239</label>
            </div>
            <div className="thirdCheck">
              <input type="radio" id="third" name="name" />
              <label htmlFor="third">We are the whole continent!</label>
            </div>
            <div className="fourthCheck">
              <input type="radio" id="fourth" name="name" />
              <label htmlFor="fourth">Never been good at maths...</label>
            </div>
            <div className="fifthCheck">
              <input type="radio" id="fifth" name="name" />
              <label htmlFor="fifth">I don't want to disclose this</label>
            </div>
          </div>
        </div>
        <div className="checkbox-list">
          <label className="checkbox-title">
            Do you want extinction updates?
          </label>
          <div className="choices-checkbox">
            <div className="firstTick">
              <input
                className="check"
                type="checkbox"
                id="first-checkbox"
                value="checkbox-1"
              />

              <label htmlFor="first">
                If you can you deliver to my local river!
              </label>
            </div>
            <div>
              <input
                className="check"
                type="checkbox"
                id="second-checkbox"
                value="checkbox-1"
              />

              <label htmlFor="second">Yes please, love news and updates!</label>
            </div>
            <div>
              <input
                className="check"
                type="checkbox"
                id="third-checkbox"
                value="checkbox-1"
              />

              <label htmlFor="third">Maybe a good idea.</label>
            </div>
            <div>
              <input
                className="check"
                type="checkbox"
                id="fourth-checkbox"
                value="checkbox-1"
              />

              <label htmlFor="fourth">
                I will probably oversleep them anyway...
              </label>
            </div>
            <div>
              <input
                className="check"
                type="checkbox"
                id="fifth-checkbox"
                value="checkbox-1"
              />

              <label htmlFor="fifth">No! I don't care.</label>
            </div>
          </div>
        </div>
        <div className="comment">
          <label className="comment-title">
            If you can actually type, leave message
          </label>

          <textarea
            className="comment-text"
            placeholder="here you can leave your comments and advices"
          ></textarea>
        </div>
        <button
          onClick={submitMessage}
          className="survey-button"
          type="submit"
          id="submit"
          onSubmitted={this.handleSubmitted}
        >
          Send your Form
        </button>

        <button className="active-article__button">
          <Link to="/">Go Home</Link>
        </button>
        <footer className="survey-footer">
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
      </div>
    );
  }
}

export default Survey;
