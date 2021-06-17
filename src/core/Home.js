/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../style.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import phoneimage from "../img/phone-image.png";
import icon1 from "../img/icon-1.png";
import icon2 from "../img/icon-2.png";
import icon3 from "../img/icon-3.png";
import smartphone2 from "../img/smartphone-2.png";
import appstore from "../img/app-store-icon.png";
import playstore from "../img/google-play-icon.png";
import smartphone1 from "../img/smartphone-1.png";
import smartphone3 from "../img/smartphone-3.png";
import smartphone4 from "../img/smartphone-4.png";

export default function Home() {
  return (
    <div id="page-wrap">
      <div id="cashierless-hero-wrapper">
        <Navbar></Navbar>

        <div className="container cashierless-hero-inner">
          <h1 className="animated fadeIn wow" data-wow-delay="0.4s">
            A Self-Checkout App for Faster Checkouts
          </h1>
          <p className="animated fadeIn wow" data-wow-delay="0.67s">
            Cashier-less Shopping means you will never have to wait in line at
            the checkout again. Simply scan and pay for your items using your
            phone and you are free to leave the store.
          </p>
          <Link
            className="btn btn-md download-btn-first wow fadeInLeft animated"
            data-wow-delay="0.85s"
            to="/signin"
          >
            Sign-in
          </Link>
          <Link
            className="btn btn-md features-btn-first animated fadeInLeft wow"
            data-wow-delay="0.95s"
            to="/signup"
          >
            Sign-up
          </Link>
          <img
            className="cashierless-hero-smartphone animated fadeInRight wow"
            data-wow-delay="1s"
            src={phoneimage}
            alt="Smartphone"
          />
        </div>
      </div>

      <div className="cashierless-advantages-outer">
        <div className="container">
          <h1 className="second-title">
            <span className="span-perfect">Easy</span>
            <span className="span-features">Steps</span>
          </h1>

          <div
            className="row cashierless-advantages-grid-columns wow animated fadeIn"
            data-wow-delay="0.36s"
          >
            <div className="col-sm-4">
              <img className="grid-image" src={icon1} alt="Icon-1" />
              <h1 className="grid-title">Get in</h1>
              <p className="grid-desc">
                Enter the store and login to cashierless to start.
              </p>
            </div>

            <div className="col-sm-4">
              <img className="grid-image" src={icon2} alt="Icon-2" />
              <h1 className="grid-title">Scan!</h1>
              <p className="grid-desc">
                Scan your product's QR code to add into cart.
              </p>
            </div>

            <div className="col-sm-4">
              <img className="grid-image" src={icon3} alt="Icon-3" />
              <h1 className="grid-title">Get out</h1>
              <p className="grid-desc">
                Pay cashless and show the QR to guard.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="cashierless-slider-outer wow fadeIn"
        data-wow-delay="0.36s"
      >
        <h1>SIMPLE UI</h1>
        <small>Easy and Fast</small>
        <div className="container cashierless-slider-inner">
          <div className="owl-carousel owl-theme">
            <div className="item">
              <img src={smartphone1} alt="" />
            </div>
            <div className="item">
              <img src={smartphone2} alt="" />
            </div>
            <div className="item">
              <img src={smartphone3} alt="" />
            </div>
            <div className="item">
              <img src={smartphone4} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="curved-bg-div wow animated fadeIn"
        data-wow-delay="0.15s"
      ></div>
      <div id="cashierless-features" className="cashierless-features-outer">
        <div className="container">
          <div className="row cashierless-features-grid-columns">
            <div
              className="col-sm-6 in-order-1 wow animated fadeInLeft"
              data-wow-delay="0.22s"
            >
              <div className="col-sm-image-container">
                <img
                  className="img-float-left"
                  src={smartphone1}
                  alt="smartphone-1"
                />
                <span className="span-new">NEW</span>
              </div>
            </div>

            <div
              className="col-sm-6 in-order-2 sm-6-content wow animated fadeInRight"
              data-wow-delay="0.22s"
            >
              <h1>NEW FEATURES</h1>
              <p>
                This application is now a single page application built using
                React.js for even faster checkouts.
                <br />
                Multi user authentication for Customer, Guard and Manager from a
                single login page, and much more.
              </p>
            </div>

            <div
              className="col-sm-6 in-order-3 sm-6-content wow animated fadeInLeft"
              data-wow-delay="0.22s"
            >
              <h1>UI FOR EVERYONE</h1>
              <p>
                Very easy to use web application UI so everyone can use it
                without any setup or download.
              </p>
              <span className="circle circle-first">
                <i className="fas fa-star"></i>
              </span>
              <span className="circle circle-middle">
                <i className="far fa-star"></i>
              </span>
              <span className="circle circle-last">
                <i className="far fa-thumbs-up"></i>
              </span>
            </div>

            <div
              className="col-sm-6 in-order-4 wow animated fadeInRight"
              data-wow-delay="0.22s"
            >
              <img
                className="img-float-right"
                src={smartphone2}
                alt="smartphone-2"
              />
            </div>

            <div
              className="col-sm-6 in-order-5 wow animated fadeInLeft"
              data-wow-delay="0.22s"
            >
              <div className="col-sm-image-container">
                <img
                  className="img-float-left"
                  src={smartphone3}
                  alt="smartphone-3"
                />
                <span className="span-new">NEW</span>
                <span className="span-percent">SECURE</span>
              </div>
            </div>
            <div
              className="col-sm-6 in-order-6 sm-6-content wow animated fadeInRight"
              data-wow-delay="0.22s"
            >
              <h1>PAYMENT GATEWAY INTEGRATED</h1>
              <p>
                Now you can checkout even faster with integrated STRIPE payment
                gateway. It is secure and served over HTTPS.
              </p>
              <span className="circle circle-first">100%</span>
            </div>
          </div>
        </div>
      </div>

      <div id="cashierless-download" className="cashierless-bottom-outer">
        <div className="overlay">
          <div className="container cashierless-bottom-inner">
            <div className="row">
              <div className="col-sm-6">
                <h1>Mobile App coming soon</h1>
                <p>
                  Our cross-platform mobile app is in development and will be
                  released soon.
                </p>
                <a
                  className="wow fadeIn animated"
                  data-wow-delay="0.25s"
                  href="#"
                >
                  <img
                    className="app-store-btn"
                    src={appstore}
                    alt="App Store Icon"
                  />
                </a>
                <a
                  className="wow fadeIn animated"
                  data-wow-delay="0.67s"
                  href="#"
                >
                  <img
                    className="google-play-btn"
                    src={playstore}
                    alt="Google Play Icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
