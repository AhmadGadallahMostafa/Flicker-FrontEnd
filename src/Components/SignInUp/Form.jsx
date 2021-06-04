import React, { useState } from "react";
import SignUp from "./SignUp";
import FormDone from "./FormDone";
import Login from "./Login"
import "./style.scss"

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
      <div>
      <img src="https://www.teahub.io/photos/full/55-554531_2048x1536-wallpaper.jpg" alt="bg-image" className="bg-img"/>
      <div className="form-container">
      <span className="close-btn">x</span>
      <div className="form-content-left">
          <img src="https://www.shareicon.net/data/2015/08/28/91991_multimedia_512x512.png" alt="flickr-logo" className="form-img"/>
      </div>
      {!isSubmitted ? <SignUp submitForm={submitForm} /> : <FormDone />}
      </div>
      </div>
  );
}

export default Form;
