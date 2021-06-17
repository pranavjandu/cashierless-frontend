/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import ReviewCard from "../core/ReviewCard";
import "../cart.css";
import { getOrder, changeStatus } from "./helper/guardapicalls";
import { isAuthenticated } from "../auth/Index";
import { Redirect } from "react-router-dom";

const GuardReview = ({ match }) => {
  const [products, setProducts] = useState([]);
  const token = isAuthenticated() && isAuthenticated().token;
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    getProducts(match.params.orderId);
  }, []);

  const getProducts = (orderId) => {
    getOrder(orderId)
      .then((res) => {
        setProducts(res.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loadAllProducts = (products) => {
    return (
      <div className="box-element">
        <div className="cart-row">
          <div style={{ flex: 2 }}></div>
          <div style={{ flex: 1 }}>
            <strong>Item</strong>
          </div>
          <div style={{ flex: 1 }}>
            <strong>Price</strong>
          </div>
          <div style={{ flex: 1 }}>
            <strong>Quantity</strong>
          </div>
          <div style={{ flex: 1 }}>
            <strong>Total</strong>
          </div>
        </div>
        {products.map((product, index) => (
          <ReviewCard key={index} product={product} />
        ))}
      </div>
    );
  };

  const getARedirect = () => {
    if (redirect) {
      return <Redirect to="/guard/dashboard/" />;
    }
  };

  const markVerified = () => {
    const status = "verified";
    const orderId = match.params.orderId;
    changeStatus(token, orderId, status)
      .then((res) => {
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const raiseIssue = () => {
    const status = "issue";
    const orderId = match.params.orderId;
    changeStatus(token, orderId, status)
      .then((res) => {
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Base title="Review Order" description="Check and review">
      <div className="row text-center">
        {getARedirect()}
        <div className="col-md-9 col-sm-12 col-xs-12">
          {products.length > 0 ? (
            loadAllProducts(products)
          ) : (
            <h4>No products</h4>
          )}
        </div>
        <div className="col-md-3 col-sm-12 col-xs-12 mt-5">
          <button
            className="btn btn-lg btn-block btn-success"
            onClick={markVerified}
          >
            Verified
          </button>
          <button
            className="btn btn-lg btn-block btn-warning"
            onClick={raiseIssue}
          >
            Raise Issue
          </button>
        </div>
      </div>
    </Base>
  );
};

export default GuardReview;
