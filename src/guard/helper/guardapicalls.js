import { API } from "../../backend";

export const getOrder = (orderId) => {
  return fetch(`${API}order/${orderId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const changeStatus = (token, orderId, status) => {
  return fetch(`${API}order/status`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ orderId, status: status }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
