/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { isAuthenticated } from "../auth/Index";
import StripeCheckout from "react-stripe-checkout";
import { API, STRIPE_KEY } from "../backend";
import { createOrder } from "./helper/OrderHelper";
import { cartEmpty } from "./helper/CartHelper";
import { Redirect } from "react-router-dom";

const StripeCheckoutC = ({
  products,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    error: "",
    address: "",
  });

  const [redirect, setRedirect] = useState(false);

  const jwttoken = isAuthenticated() && isAuthenticated().token;
  const userId = isAuthenticated() && isAuthenticated().user._id;

  const getFinalAmount = () => {
    let amount = 0;
    products.map((p) => {
      amount = amount + p.price * p.count;
    });
    return amount;
  };

  const makePayment = (token) => {
    const body = {
      token,
      products,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`${API}stripepayment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        const { status } = response;
        if (status == "200") {
          setData({ ...data, success: true });
          const orderData = {
            products: products,
            transaction_id: response.body.id,
            amount: response.body.amount / 100,
          };
          createOrder(userId, jwttoken, orderData)
            .then((resp) => {
              const url = "/order/" + resp._id;
              setRedirect(url);
              cartEmpty(() => {});
              setReload(!reload);
            })
            .catch((err) => console.log(err));
        } else {
          setData({ ...data, error: "Payment Failed" });
        }
      })
      .catch((err) => {
        console.log(err);
        setData({ ...data, error: "Payment Failed" });
      });
  };

  const getARedirect = () => {
    if (redirect) {
      return <Redirect to={redirect} />;
    }
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: data.error ? "" : "none" }}
      >
        {data.error}
      </div>
    );
  };

  return (
    <div>
      <div>
        {errorMessage()}
        {getARedirect()}
        <p>
          <strong>Final Amount : {getFinalAmount(products)}</strong>
        </p>
        <StripeCheckout
          stripeKey={STRIPE_KEY}
          token={makePayment}
          amount={getFinalAmount(products) * 100}
          currency="INR"
          name="Cashierless bill"
          shippingAddress
          billingAddress
        >
          <button className="btn btn-success">Pay with Stripe</button>
        </StripeCheckout>
      </div>
    </div>
  );
};

export default StripeCheckoutC;
