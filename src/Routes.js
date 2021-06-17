import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import NotFound from "./core/NotFound";
import SignIn from "./user/SignIn";
import SignUp from "./user/SignUp";
import ManagerRoute from "./auth/ManagerRoutes";
import PrivateRoute from "./auth/PrivateRoutes";
import GuardRoute from "./auth/GuardRoutes";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import UserDashboard from "./user/UserDashboard";
import ManagerDashboard from "./user/ManagerDashboard";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import GuardDashboard from "./user/GuardDashboard";
import Cart from "./core/Cart";
import OrderPlaced from "./user/OrderPlaced";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/signin" exact component={SignIn}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
        <PrivateRoute path="/cart" exact component={Cart} />
        <PrivateRoute path="/order/:orderId" exact component={OrderPlaced} />
        <ManagerRoute
          path="/manager/dashboard"
          exact
          component={ManagerDashboard}
        />
        <ManagerRoute
          path="/manager/create/category"
          exact
          component={AddCategory}
        />
        <ManagerRoute
          path="/manager/create/product"
          exact
          component={AddProduct}
        />
        <ManagerRoute
          path="/manager/products"
          exact
          component={ManageProducts}
        />
        <ManagerRoute
          path="/manager/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <GuardRoute path="/guard/dashboard" exact component={GuardDashboard} />

        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
