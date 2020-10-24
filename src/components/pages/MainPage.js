import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./HomePage";
import Signup from "./Signup";
const Main = () => {
  
  return (
    <Switch>
      <Route exact path="/sse-test-app/" component={Home}></Route>
      <Route exact path="/sse-test-app/home" component={Home}></Route>
      <Route exact path="/sse-test-app/signup" component={Signup}></Route>
    </Switch>
  );
};
export default Main;
