import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const signUpForm = () => {
  return (
    <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
        <form>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="new-password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="new-password" />
          </div>
          <div className="form-group">
            <label htmlFor="password2" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password2" />
          </div>
          <div className="form-group mt-5">
            <button className="btn btn-success">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const SignUp = () => {
  return <Base title="signup">{signUpForm()}</Base>;
};

export default SignUp;
