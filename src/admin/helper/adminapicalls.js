import { API } from "../../backend";

//category calls
export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get all categories
export const getCategories = () => {
  return fetch(`${API}/category/all`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
