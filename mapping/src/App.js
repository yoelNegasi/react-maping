import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Users from "./Users";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
    this.initialize = this.initialize.bind(this);
  }
  initialize() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  componentDidMount() {
    this.initialize();
  }
  render() {
    let elements = this.state.users.map((el) => (
      <Users id={el.id} userId={el.userId} title={el.title} />
    ));
    return (
      <div>
        <table>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>body</th>
          </tr>
          <tbody>{elements}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
