/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/Index";

const Footer = () => {
  return (
    <footer className="footer-outer">
      <div className="container footer-inner">
        <div
          className="footer-three-grid wow fadeIn animated"
          data-wow-delay="0.66s"
        >
          <div className="column-1-3">
            <h1>Cashierless</h1>
          </div>
          <div className="column-2-3">
            <nav className="footer-nav">
              <ul>
                <li className="">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="">
                  <Link to="/" className="nav-link">
                    Features
                  </Link>
                </li>
                <li className="">
                  <Link to="/" className="nav-link">
                    Reviews
                  </Link>
                </li>
                <li className="">
                  <Link to="/" className="nav-link">
                    About us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="column-3-3">
            <div className="social-icons-footer">
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
        </div>

        <span className="border-bottom-footer"></span>

        <p className="copyright text-white">
          &copy; 2021 Cashierless. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default withRouter(Footer);
