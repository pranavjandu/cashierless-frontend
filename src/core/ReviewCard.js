/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";

const Card = ({ product }) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "Test title";
  const cartDescrption = product ? product.description : "Test description";
  const cartPrice = product ? product.price : 0;

  return (
    <div className="cart-row">
      <div style={{ flex: 2 }}>
        <ImageHelper product={product} />
      </div>
      <div style={{ flex: 1 }}>
        <p>{product.name}</p>
      </div>
      <div style={{ flex: 1 }}>
        <p>₹{product.price}</p>
      </div>
      <div style={{ flex: 1 }}>
        <p className="quantity">{product.count}</p>
      </div>
      <div style={{ flex: 1 }}>
        <p>₹{product.count * product.price}</p>
      </div>
    </div>
  );
};

export default Card;
