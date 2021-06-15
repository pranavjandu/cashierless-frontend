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
    <div>
      <ul className="nav nav-tabs">
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

        <li className="nav-item">
          <Link
            style={currentTab(history, "/scanner")}
            to="/scanner"
            className="nav-link"
          >
            Scanner
          </Link>
        </li>
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
