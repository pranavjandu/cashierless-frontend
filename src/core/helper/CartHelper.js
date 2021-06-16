/* eslint-disable array-callback-return */

export const addItemToCart = (item, next) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    let isPresent = false;
    if (cart.length > 0) {
      for (let x = 0; x < cart.length; x++) {
        if (cart[x]._id === item._id) {
          isPresent = true;
          break;
        }
      }
    }
    if (isPresent) {
      for (let x = 0; x < cart.length; x++) {
        if (cart[x]._id === item._id) {
          cart[x].count = cart[x].count + 1;
          break;
        }
      }
    } else {
      cart.push({
        ...item,
        count: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};

export const removeItemFromCart = (productId) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.map((product, i) => {
      if (product._id === productId) {
        cart.splice(i, 1);
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  return cart;
};

export const loadCart = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
    return [];
  }
};

export const cartEmpty = (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem("cart");
    let cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};
