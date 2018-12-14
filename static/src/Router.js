import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Index";
import Message from "./components/Message";

class RootRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/message" component={Message} />
      </Switch>
    );
  }
}
export default RootRouter;
