import axios from "axios";
import React, { Component } from "react";
import "./App.css";

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
        console.log(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  componentDidMount() {
    this.initialize();
  }
  render() {
    console.log("state", this.state.users);
    let elements = this.state.users.map((el) => {
      return (
        <tr>
          <td>{el.id}</td>
          <td>{el.userId}</td>
          <td>{el.title}</td>
        </tr>
      );
    });
    return (
      <div>
        <table>
          <tr>
            <th>ID</th>
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
