import React from "react";
import useForm from "./useForm";
import validateInfo from "./validation";
import "./style.scss"
const SignUp = ({submitForm}) => {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm,validateInfo);
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Be part of an inspiring story</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            UserName
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter Your Username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="text"
            name="email"
            className="form-input"
            placeholder="Enter your Email adress"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter Your Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Confirm Password
          </label>
          <input
            id="password"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Confirm Your Password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sign Up!
        </button>
        <span className="form-input-login">
          Already have an account? So Login <a href="#">Here</a>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
