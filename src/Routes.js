import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import NotFound from "./core/NotFound";
import SignIn from "./user/SignIn";
import SignUp from "./user/SignUp";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/signin" exact component={SignIn}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
