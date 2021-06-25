import { API } from "../backend";

// user is JSON from frontend
export const signup = (user) => {
  return fetch(`${API}signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signin = (user) => {
  return fetch(`${API}signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const googleSignin = (email) => {
  return fetch(`${API}auth/google`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// Setting the token in cookie storage
export const authenticate = (data, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

// accessign the jwt token and removing it
export const signout = (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem("jwt");
    next();

    return fetch(`${API}signout`, {
      method: "GET",
    })
      .then((response) => console.log("signout success"))
      .catch((err) => console.log(err));
  }
};

// Validate if user is authenticated or not
export const isAuthenticated = () => {
  if (typeof window == undefined) {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
