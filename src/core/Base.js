import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Base = ({
  title = "Title",
  description = "Description",
  classname = "p-4 text-center text-white",
  children,
}) => {
  return (
    <div>
      <div className="container-fluid p-0">
        <div id="cashierless-hero-wrapper">
          <Navbar></Navbar>
          <div className={classname}>
            <h2>{title}</h2>
            <h4>{description}</h4>
          </div>
          <div className={classname}>{children}</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Base;
