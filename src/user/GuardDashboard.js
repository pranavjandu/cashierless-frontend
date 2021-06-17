/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Base from "../core/Base";
import qrcode from "../img/qrcode.webp";
import QrReader from "react-qr-reader";
import { Redirect } from "react-router-dom";

const GuardDashboard = () => {
  const [result, setResult] = useState({
    result: "",
    opencam: false,
  });

  const [redirect, setRedirect] = useState(false);

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

  const getARedirect = () => {
    if (redirect) {
      const url = "/guard/review/" + result.result;
      return <Redirect to={url} />;
    }
  };

  const handleScan = (data) => {
    if (data) {
      setResult({ ...result, result: data });
      setRedirect(true);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <Base title="" description="Click to scan the customer QR.">
      <div className="row">
        {getARedirect()}
        {openQR()}
      </div>
    </Base>
  );
};

export default GuardDashboard;
