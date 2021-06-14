import React from "react";
import Navbar from "./Navbar";

const Base = ({
  title = "Title",
  description = "Description",
  classname = "p-4",
  children,
}) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container-fluid">
        <div className="jumbotron text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={classname}>{children}</div>
      </div>
      <footer className="footer mt-auto py-3">
        <div className="container-fluid bg-success text-center">
          <h4>This is the footer</h4>
        </div>
        <div className="container">
          <span className="text-muted">Cashierless shopping</span>
        </div>
      </footer>
    </div>
  );
};

export default Base;
