import React, { useState, useEffect } from "react";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/CartHelper";
import StripeCheckout from "./StripeCheckout";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = (products) => {
    return (
      <div>
        <h2>This section is to load products</h2>
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
        <div className="col-8">
          {products.length > 0 ? (
            loadAllProducts(products)
          ) : (
            <h4>No products</h4>
          )}
        </div>
        <div className="col-4">
          {<StripeCheckout products={products} setReload={setReload} />}
        </div>
      </div>
    </Base>
  );
};

export default Cart;
