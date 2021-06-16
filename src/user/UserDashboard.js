import React, { useState } from "react";
import Base from "../core/Base";
import qrcode from "../img/qrcode.webp";
import QrReader from "react-qr-reader";

const UserDashboard = () => {
  const [result, setResult] = useState({
    result: "",
    opencam: false,
  });

  const changeDiv = () => {
    setResult({ ...result, opencam: true });
  };

  const openQR = () => {
    if (result.opencam) {
      return (
        <div className="col col-md-6 col-sm-6 qrcodescan mx-auto">
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{
              height: "auto",
              width: "100%",
              maxWidth: "350px",
              margin: "0 auto",
            }}
          />
          <p>{JSON.stringify(result)}</p>
        </div>
      );
    } else {
      return (
        <div className="col col-md-6 col-sm-6 qrcodeicon mx-auto">
          <img
            src={qrcode}
            alt="Qr icon"
            onClick={changeDiv}
            style={{ height: "auto", width: "100%", maxWidth: "300px" }}
          ></img>
        </div>
      );
    }
  };

  const handleScan = (data) => {
    console.log(data);
    if (data) {
      setResult({ ...result, result: data });
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <Base title="" description="Click to scan the product.">
      <div className="row">{openQR()}</div>
    </Base>
  );
};

export default UserDashboard;
