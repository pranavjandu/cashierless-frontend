import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/Index";
import { Link } from "react-router-dom";

const ManagerDashboard = () => {
  const {
    user: { name, email },
  } = isAuthenticated();
  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">Manager Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/manager/create/category" className="nav-link">
              Create Categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/manager/create/product" className="nav-link">
              Create Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/manager/products" className="nav-link">
              Manage Products
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/manager/orders" className="nav-link">
              Review Orders
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header bg-dark text-white">Manager Information</h4>
        <ul className="list-group">
          <li className="list-group-item text-dark">
            <span className="badge bg-success mr-2 text-white">Name:</span>{" "}
            {name}
          </li>
          <li className="list-group-item text-dark">
            <span className="badge bg-success mr-2 text-white">Email:</span>{" "}
            {email}
          </li>

          <li className="list-group-item">
            <span className="badge bg-danger">Admin Area</span>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Base
      title="Welcome to Manager area"
      description="Manage all of your products here"
      className="container bg-success p-4"
    >
      <div className="row">
        <div className="col-lg-3 col-md-12 col-xs-12">{adminLeftSide()}</div>
        <div className="col-lg-9 col-md-12 col-xs-12">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default ManagerDashboard;
