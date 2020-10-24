import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./HomePage";
import Signup from "./Signup";
import Example from './Example'
const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/signup" component={Signup}></Route>
      <Route exact path="/example" component={Example}></Route>
    </Switch>
  );
};
export default Main;
