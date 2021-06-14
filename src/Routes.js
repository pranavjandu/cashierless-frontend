import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import NotFound from "./core/NotFound";
import SignIn from "./user/SignIn";
import SignUp from "./user/SignUp";
import ManagerRoute from "./auth/ManagerRoutes";
import PrivateRoute from "./auth/PrivateRoutes";
import GuardRoute from "./auth/GuardRoutes";
import UserDashboard from "./user/UserDashboard";
import AdminDashboard from "./user/AdminDashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/signin" exact component={SignIn}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
        <PrivateRoute path="/user/dashoard" exact component={UserDashboard} />
        <ManagerRoute
          path="/manager/dashoard"
          exact
          component={AdminDashboard}
        />
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
