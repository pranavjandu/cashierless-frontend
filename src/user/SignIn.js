import React, { useState } from "react";
import Base from "../core/Base";
import { Redirect } from "react-router-dom";
import {
  signin,
  authenticate,
  isAuthenticated,
  googleSignin,
} from "../auth/Index";
import { GoogleLogin } from "react-google-login";
import { GOOGLE_CLIENT_ID } from "../backend";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
              email: "",
              password: "",
              error: "",
            });
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 0) {
        return <Redirect to="/user/dashboard" />;
      }
      if (user && user.role === 1) {
        return <Redirect to="/guard/dashboard" />;
      }
      if (user && user.role === 2) {
        return <Redirect to="/manager/dashboard" />;
      }
    }
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

  const loadingMessage = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: loading ? "" : "none" }}
      >
        Loading.........
      </div>
    );
  };
  const handleGoogleLoginError = async (googleData) => {
    setValues({ ...values, error: "Google login unsuccessful" });
  };

  const handleGoogleLogin = async (googleData) => {
    setValues({ ...values, error: false, loading: true });
    googleSignin(googleData.profileObj.email)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
              email: "",
              password: "",
              error: "",
            });
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          {errorMessage()}
          {loadingMessage()}
          <form>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleChange("email")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="new-password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="new-password"
                value={password}
                onChange={handleChange("password")}
              />
            </div>
            <div className="form-group mt-5">
              <button onClick={onSubmit} className="btn btn-success">
                Sign In
              </button>
            </div>
            <div className="form-group mt-1">
              <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Log in with Google"
                onSuccess={handleGoogleLogin}
                onFailure={handleGoogleLoginError}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="Sign-in" description="">
      {signInForm()}
      {performRedirect()}
    </Base>
  );
};

export default SignIn;
