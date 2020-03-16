import React from "react";
import "./Form.scss";
import { Link } from "react-router-dom";

const Form = props => (
  <form
    className="btn--section"
    onSubmit={props.getArticles}
    style={{ marginBottom: "2rem" }}
  >
    <span>
      Search Human News. <br></br>Enter Species here!
    </span>
    <div className="arrow bounce"></div>
    <input className="form__input" type="text" name="articleName" />
    <button className="btn">
      <Link to="/article"> Check it out!</Link>
    </button>
  </form>
);

export default Form;
