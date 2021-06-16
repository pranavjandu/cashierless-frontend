/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/8333307/pexels-photo-8333307.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`;
  return (
    <img
      src={imageurl}
      alt="photo"
      style={{ maxHeight: "auto", maxWidth: "100px" }}
      className="mb-3 rounded"
    />
  );
};

export default ImageHelper;
