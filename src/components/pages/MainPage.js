import React from "react";
import { BrowserRouter, Route, HashRouter } from "react-router-dom";
import Home from "./HomePage";
import Signup from "./Signup";
const Main = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/sse-test-app/" component={Home}></Route>
        <Route exact path="/sse-test-app/home" component={Home}></Route>
        <Route exact path="/sse-test-app/signup" component={Signup}></Route>
      </div>
    </BrowserRouter>
  );
};
export default Main;
