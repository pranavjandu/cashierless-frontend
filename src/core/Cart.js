import React, { useState, useEffect } from "react";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/CartHelper";
import StripeCheckout from "./StripeCheckout";
import "../cart.css";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

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
          <div style={{ flex: 1 }}>
            <strong>Action</strong>
          </div>
        </div>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };
  return (
    <Base title="Cart Page" description="Ready to checkout">
      <div className="row text-center">
        <div className="col-md-8 col-sm-12 col-xs-12">
          {products.length > 0 ? (
            loadAllProducts(products)
          ) : (
            <h4>No products</h4>
          )}
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12 mt-5">
          {<StripeCheckout products={products} setReload={setReload} />}
        </div>
      </div>
    </Base>
  );
};

export default Cart;
