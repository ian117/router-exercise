import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";
import About from "./About";
import FAQ from "./FAQ";
import Home from "./Home";
import Store from "./Store";

const Application = () => {
    return (
    <>
        <Switch>
        <Route path="/home"><Home/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/faq"><FAQ/></Route>
        <Route path="/store"><Store/></Route>
        <Route path="/home"></Route>
        <Route path="/">Soy parte de la Raíz y soy eterno</Route>
      </Switch>
</>
    )
}

export default Application;