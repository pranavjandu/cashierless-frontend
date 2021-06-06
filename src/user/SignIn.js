import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const signInForm = () => {
  return (
    <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
        <form>
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
          <div className="form-group mt-5">
            <button className="btn btn-success">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const SignIn = () => {
  return <Base title="signin">{signInForm()}</Base>;
};

export default SignIn;
