import React from "react";
import "./Form.scss";

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
    <button className="btn">Check it out!</button>
  </form>
);

export default Form;
