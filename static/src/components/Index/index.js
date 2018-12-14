import React, { Component } from "react";
import cs from "./index.less";
import axios from "axios";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    this.getList();
  }
  getList = async () => {
    const list = await axios.get("/api/getlist");
    console.log(list);
    this.setState({
      list: list.data.data
    });
  };
  render() {
    const { list } = this.state;

    const item = list.map((val, key) => {
      return (
        <li key={key}>
          <h2>{val.title}</h2>
          <p>{val.content}</p>
        </li>
      );
    });
    return (
      <div className={cs.index}>
        <h1>wellcome</h1>
        <ul>{item}</ul>
      </div>
    );
  }
}

export default Index;
