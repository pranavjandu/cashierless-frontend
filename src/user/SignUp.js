import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/Index";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ firstname: name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: success ? "" : "none" }}
      >
        New account created
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          {successMessage()}
          {errorMessage()}
          <form>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={handleChange("name")}
                value={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={handleChange("email")}
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="new-password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                autoComplete="on"
                id="new-password"
                onChange={handleChange("password")}
                value={password}
              />
            </div>
            <div className="form-group mt-5">
              <button className="btn btn-success" onClick={onSubmit}>
                Sign Up
              </button>
            </div>
          </form>
          <p>{JSON.stringify(values)}</p>
        </div>
      </div>
    );
  };

  return <Base title="signup">{signUpForm()}</Base>;
};

export default SignUp;
