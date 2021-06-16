import { API } from "../../backend";

export const getProduct = (productId) => {
  return fetch(`${API}product/${productId}`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
