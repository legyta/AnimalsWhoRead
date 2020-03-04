import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/Survey.scss";
import frame from "./images/frame.svg";

const Survey = props => (
  <section id="survey" className="survey-body">
    <img className="survey--img" src={frame} alt="frame" />
    <div className="title-description">
      <div className="title">
        <h1>Feelings about Extinction</h1>
      </div>
      <div className="description">
        <p>Greetings to animals sharing their feelings here</p>
      </div>
    </div>
    <div className="contact--survey">
      <div className="name">
        <label htmlFor="name" id="name-label">
          How are you called
        </label>

        <input
          type="text"
          id="name"
          name="name"
          placeholder="your species name"
          required
        />
      </div>
      {/* email  */}
      <div className="email">
        <label htmlFor="email" id="email-label">
          What is your email
        </label>

        <input
          type="email"
          id="email-input"
          name="email"
          placeholder="if you have one"
          pattern="[^ @]*@[^ @]*"
        />
      </div>
      {/* age */}
      <div className="age">
        <label htmlFor="number" id="number-label">
          Years on the planet
        </label>

        <input
          type="number"
          id="number"
          name="number"
          placeholder="age"
          min="0"
          max="100"
        />
      </div>
    </div>
    <div className="dropdown-list">
      <label id="dropdown-title">How do you feel about Extinction?</label>
      <select id="dropdown">
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
          Huh? What is that? Did I sleep for too long again. Need to catch up on
          the news!
        </option>
        <option value="fifth-choice">Prefer not to answer.</option>
      </select>
    </div>
    <div className="radio-list">
      <label id="radio-title">Do you know how big is your species?</label>
      <div className="choices row">
        <div className="firstCheck col-12">
          <input type="radio" id="first" name="name" />
          <label htmlFor="first">Only few of us left...</label>
        </div>
        <div className="secondCheck col-12">
          <input type="radio" id="second" name="name" />
          <label htmlFor="second">I think around 736,239</label>
        </div>
        <div className="thirdCheck col-12">
          <input type="radio" id="third" name="name" />
          <label htmlFor="third">We are the whole continent!</label>
        </div>
        <div className="fourthCheck col-12">
          <input type="radio" id="fourth" name="name" />
          <label htmlFor="fourth">Never been good at maths...</label>
        </div>
        <div className="fifthCheck col-12">
          <input type="radio" id="fifth" name="name" />
          <label htmlFor="fifth">I don't want to disclose this</label>
        </div>
      </div>
    </div>
    <div className="checkbox-list">
      <label id="checkbox-title">Do you want extinction updates?</label>
      <div className="choices-checkbox">
        <div>
          <input type="checkbox" id="first-checkbox" value="checkbox-1" />

          <label htmlFor="first">
            Yes! If you can you deliver in my local river.
          </label>
        </div>
        <div>
          <input type="checkbox" id="first-checkbox" value="checkbox-1" />

          <label htmlFor="first">Yes please, love news and updates!</label>
        </div>
        <div>
          <input type="checkbox" id="first-checkbox" value="checkbox-1" />

          <label htmlFor="first">Maybe a good idea.</label>
        </div>
        <div>
          <input type="checkbox" id="first-checkbox" value="checkbox-1" />

          <label htmlFor="first">
            I will probably oversleep them anyway...
          </label>
        </div>
        <div>
          <input type="checkbox" id="first-checkbox" value="checkbox-1" />

          <label htmlFor="first">No! I don't care.</label>
        </div>
      </div>
    </div>
    <div className="comment">
      <label id="comment-title">If you can actually type, leave message</label>

      <textarea className="comment-text">
        here you can leave your comments and advices
      </textarea>
    </div>

    <button type="submit" id="submit">
      Send your Form
    </button>
    <button className="active-article__button">
      <Link to="/">Go Home</Link>
    </button>
  </section>
);

export default Survey;
