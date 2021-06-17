/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Base from "../core/Base";
import QRCode from "react-qr-code";

const ProductQR = ({ match }) => {
  const [product, setProduct] = useState(match.params.productId);
  return (
    <Base title="Product Created" description="Download this QR for printing">
      <div className="row text-center">
        <div className="col mx-auto">
          <QRCode download value={product} />
        </div>
      </div>
    </Base>
  );
};

export default ProductQR;
