// Now we don't have to write env variable everywhere
//we can just import the API variable
export const API =
  process.env.REACT_APP_BACKEND || "http://localhost:8000/api/";
export const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY || "";
