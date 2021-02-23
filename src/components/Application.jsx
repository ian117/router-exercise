import React from "react";
import {
    Switch,
    Route,
  } from "react-router-dom";
import About from "./About";
import FAQ from "./FAQ";
import Home from "./Home";
import Store from "./Store";

const Application = () => {
    return (
    <>
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/faq" component={FAQ}></Route>
            <Route path="/store" component={Store}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/">Soy parte de la Raíz y soy eterno</Route>
      </Switch>
</>
    )
}

export default Application;