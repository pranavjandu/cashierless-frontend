/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/Index";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "black" };
  } else {
    return { color: "blue" };
  }
};

const Navbar = ({ history }) => {
  return (
    <nav className="container navbar navbar-expand-lg main-navbar-nav navbar-light">
      <a className="navbar-brand" href="#">
        Cashierless
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav nav-items-center ml-auto mr-auto">
          <li className="nav-item">
            <Link style={currentTab(history, "/")} to="/" className="nav-link">
              Home
            </Link>
          </li>
          {isAuthenticated() && isAuthenticated().user.role === 0 && (
            <li className="nav-item">
              <Link
                style={currentTab(history, "/user/dashboard")}
                to="/user/dashboard"
                className="nav-link"
              >
                Dashboard
              </Link>
            </li>
          )}
          {isAuthenticated() && isAuthenticated().user.role === 1 && (
            <li className="nav-item">
              <Link
                style={currentTab(history, "/guard/dashboard")}
                to="/guard/dashboard"
                className="nav-link"
              >
                Guard Dashboard
              </Link>
            </li>
          )}
          {isAuthenticated() && isAuthenticated().user.role === 2 && (
            <li className="nav-item">
              <Link
                style={currentTab(history, "/manager/dashboard")}
                to="/manager/dashboard"
                className="nav-link"
              >
                Manager Dashboard
              </Link>
            </li>
          )}
          {isAuthenticated() && isAuthenticated().user.role === 0 && (
            <li className="nav-item">
              <Link
                style={currentTab(history, "/cart")}
                to="/cart"
                className="nav-link"
              >
                Cart
              </Link>
            </li>
          )}
          {!isAuthenticated() && (
            <Fragment>
              <li className="nav-item">
                <Link
                  style={currentTab(history, "/signin")}
                  to="/signin"
                  className="nav-link"
                >
                  SignIn
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={currentTab(history, "/signup")}
                  to="/signup"
                  className="nav-link"
                >
                  SignUp
                </Link>
              </li>
            </Fragment>
          )}
          {isAuthenticated() && (
            <li className="nav-item">
              <span
                className="nav-link text-white"
                onClick={() => {
                  signout(() => {
                    history.push("/");
                  });
                }}
              >
                Signout
              </span>
            </li>
          )}
        </ul>
        <div className="social-icons-header">
          <a href="">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
