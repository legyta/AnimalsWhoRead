import React from "react";
import "./Form.scss";
import { Link } from "react-router-dom";

const Form = props => (
  <form
    id="form"
    className="btn--section"
    onSubmit={props.getArticles}
    style={{ marginBottom: "2rem" }}
  >
    {" "}
    <Link to="/form"></Link>
    <span>
      Search Human News. <br></br>Enter Species here!
    </span>
    <div className="arrow bounce"></div>
    <input className="form__input" type="text" name="articleName" />
    <button className="btn">Check it out!</button>
  </form>
);

export default Form;
