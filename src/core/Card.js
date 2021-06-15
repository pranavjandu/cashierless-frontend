import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { removeItemFromCart } from "./helper/CartHelper";

const Card = ({
  product,
  removeFromCart = true,
  setReload = (f) => f,
  //   function(f){return f}
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "Test title";
  const cartDescrption = product ? product.description : "Test description";
  const cartPrice = product ? product.price : 0;

  //   const addToCart = () => {
  //     addItemToCart(product, () => setRedirect(true));
  //   };

  //   const getARedirect = (redirect) => {
  //     if (redirect) {
  //       return <Redirect to="/cart" />;
  //     }
  //   };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div className="card border border-info ">
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {cartDescrption}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4"> {cartPrice}</p>
        <div className="row">
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
