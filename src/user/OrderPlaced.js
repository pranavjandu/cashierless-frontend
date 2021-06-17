/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Base from "../core/Base";
import QRCode from "react-qr-code";

const OrderPlaced = ({ match }) => {
  const [order, setOrder] = useState(match.params.orderId);
  return (
    <Base title="Order placed" description="Show this QR to the guard">
      <div className="row text-center">
        <div className="col mx-auto">
          <QRCode value={order} />
        </div>
      </div>
    </Base>
  );
};

export default OrderPlaced;
