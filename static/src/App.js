import React, { Component } from "react";
import RootRouter from "./Router";
import { Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">主页</Link>
          </li>
          <li>
            <Link to="/message">消息</Link>
          </li>
        </ul>
        <div>
          <RootRouter />
        </div>
      </div>
    );
  }
}
