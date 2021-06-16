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
import iphone from "../img/iphone.png";
import appstore from "../img/app-store-icon.png";
import playstore from "../img/google-play-icon.png";
import smartphone1 from "../img/smartphone-1.png";

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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            laudantium fugiat vero hic excepturi exercitationem veritatis
            obcaecati odio placeat architecto sit atque quaerat dignissimos eos
            asperiores, officia necessitatibus reprehenderit quia?
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
            <span className="span-perfect">Main</span>
            <span className="span-features">Features</span>
          </h1>

          <div
            className="row cashierless-advantages-grid-columns wow animated fadeIn"
            data-wow-delay="0.36s"
          >
            <div className="col-sm-4">
              <img className="grid-image" src={icon1} alt="Icon-1" />
              <h1 className="grid-title">Usability</h1>
              <p className="grid-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                cupiditate.
              </p>
            </div>

            <div className="col-sm-4">
              <img className="grid-image" src={icon2} alt="Icon-2" />
              <h1 className="grid-title">Parallax Effect</h1>
              <p className="grid-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                cupiditate.
              </p>
            </div>

            <div className="col-sm-4">
              <img className="grid-image" src={icon3} alt="Icon-3" />
              <h1 className="grid-title">Unlimited Colors</h1>
              <p className="grid-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                cupiditate.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="cashierless-slider-outer wow fadeIn"
        data-wow-delay="0.36s"
      >
        <h1>SIMPLE WIDGETS</h1>
        <small>Drag and Drop</small>
        <div className="container cashierless-slider-inner">
          <div className="owl-carousel owl-theme">
            <div className="item">
              <img src={smartphone2} alt="" />
            </div>
            <div className="item">
              <img src={smartphone2} alt="" />
            </div>
            <div className="item">
              <img src={iphone} alt="" />
            </div>
            <div className="item">
              <img src={smartphone2} alt="" />
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
                <span className="span-free">Free</span>
              </div>
            </div>

            <div
              className="col-sm-6 in-order-2 sm-6-content wow animated fadeInRight"
              data-wow-delay="0.22s"
            >
              <h1>New Features</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam dolor iste beatae ad adipisci, fugiat dignissimos
                pariatur, dolore nemo suscipit cum nisi earum voluptates nulla!
              </p>
              <span className="circle circle-first">
                <i className="fab fa-instagram"></i>
              </span>
              <span className="circle circle-middle">
                <i className="fab fa-facebook"></i>
              </span>
              <span className="circle circle-last">
                <i className="fab fa-twitter"></i>
              </span>
            </div>

            <div
              className="col-sm-6 in-order-3 sm-6-content wow animated fadeInLeft"
              data-wow-delay="0.22s"
            >
              <h1>REAL-TIME STATISTICS</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam dolor iste beatae ad adipisci, fugiat dignissimos
                pariatur, dolore nemo suscipit cum nisi earum voluptates nulla!
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
                  src={smartphone1}
                  alt="smartphone-3"
                />
                <span className="span-data">DATA</span>
                <span className="span-percent">100%</span>
              </div>
            </div>
            <div
              className="col-sm-6 in-order-6 sm-6-content wow animated fadeInRight"
              data-wow-delay="0.22s"
            >
              <h1>POWERFUL BACKEND</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam dolor iste beatae ad adipisci, fugiat dignissimos
                pariatur, dolore nemo suscipit cum nisi earum voluptates nulla!
              </p>
              <span className="circle circle-first">95%</span>
              <span className="circle circle-middle">
                <i className="fas fa-forward"></i>
              </span>
              <span className="circle circle-last">
                <i className="fab fa-github"></i>
              </span>
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
