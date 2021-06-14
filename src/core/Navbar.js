import React, { Fragment, useState } from "react";
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
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link style={currentTab(history, "/")} to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, "/dashboard")}
            to="/dashboard"
            className="nav-link"
          >
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            to="/admin/dashboard"
            className="nav-link"
          >
            Manager Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, "/scanner")}
            to="/scanner"
            className="nav-link"
          >
            Scanner
          </Link>
        </li>
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
              className="nav-link text-warning"
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
    </div>
  );
};

export default withRouter(Navbar);
