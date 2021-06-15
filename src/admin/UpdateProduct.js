import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import {
  getCategories,
  getProduct,
  updateProduct,
} from "./helper/adminapicalls";
import { isAuthenticated } from "../auth/Index";

const UpdateProduct = ({ match }) => {
  const { user, token } = isAuthenticated();

  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    photo: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: new FormData(),
  });

  const {
    name,
    description,
    price,
    stock,
    categories,
    category,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData,
  } = values;

  const preload = (productId) => {
    getProduct(productId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        preloadCategories();
        setValuesFunction(data);
      }
    });
  };

  const setValuesFunction = (data) => {
    setValues({
      ...values,
      error: "something",
      name: data.name,
      description: data.description,
      price: data.price,
      category: data.category._id,
      stock: data.stock,
    });
  };

  const preloadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          categories: data,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    preload(match.params.productId);
  }, []);

  //TODO: work on it
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    updateProduct(match.params.productId, user._id, token, formData).then(
      (data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            description: "",
            price: "",
            photo: "",
            stock: "",
            loading: false,
            createdProduct: data.name,
          });
        }
      }
    );
  };

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, error: "" });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdProduct ? "" : "none" }}
    >
      <h4>{createdProduct} updated successfully</h4>
    </div>
  );
  const warningMessage = () => {
    if (error) {
      return <div className="alert alert-danger">Error - {error}</div>;
    }
  };

  const getOption = (cate, index) => {
    if (cate._id === values.category) {
      return (
        <option selected key={index} value={cate._id}>
          {cate.name}
        </option>
      );
    } else {
      return (
        <option key={index} value={cate._id}>
          {cate.name}
        </option>
      );
    }
  };

  const updateProductForm = () => (
    <form>
      <span>Photo</span>
      <div className="form-group">
        <label className="btn btn-block">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose an image"
          />
        </label>
      </div>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group mt-2">
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
        />
      </div>
      <div className="form-group mt-2">
        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="Category"
        >
          <option>Select Category</option>
          {categories &&
            categories.map((cate, index) => getOption(cate, index))}
        </select>
      </div>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("stock")}
          type="number"
          className="form-control"
          placeholder="Stock"
          value={stock}
        />
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3 mt-2"
      >
        Update Product
      </button>
    </form>
  );

  return (
    <Base
      title="Update the product here!"
      description="Welcome to product updation section"
      className="container bg-info p-4"
    >
      <Link to="/manager/dashboard" className="btn btn-md bg-info mb-3">
        Manager Home
      </Link>
      <div className="row rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {warningMessage()}
          {updateProductForm()}
        </div>
      </div>
    </Base>
  );
};

export default UpdateProduct;
