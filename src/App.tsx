import React, { Component } from "react";
import PersonR from "./PersonR";
//import * as request from "request";
import axios from "axios";
import Person from "./PersonEntity";
import "./footer.scss";
import "./header.scss";

export default class App extends Component {
  state = {
    data: [],
    loading: true,
  };

  // getSnapshotBeforeUpdate() {
  //   console.log("getSnapshotBeforeUpdate");
  // }

  componentDidMount() {
    console.log("componentDidMount");
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      //console.log(response.data);
      this.setState({ data: response.data, loading: false });
    });
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }

  render() {
    if (this.state.loading) {
      return "Loading...";
    } else {
      let custs: Array<Person> = this.state.data;
      console.log("render");
      let listItems = custs.map((post, index) => (
        <PersonR key={index} name={post.name} id={post.id} />
      ));
      return <React.Fragment>{listItems}</React.Fragment>;
    }
  }
}

// const posts = [
//   { id: 1, title: "avinash", age: "29", completed: true },
//   { id: 2, title: "amit", age: "29", completed: true },
//   { id: 3, title: "umesh", age: "29", completed: true },
//   { id: 4, title: "pradeep", age: "29", completed: true },
//   { id: 5, title: "pankaj", age: "29", completed: true },
//   { id: 6, title: "anil", age: "29", completed: true },
//   { id: 7, title: "ravi", age: "29", completed: true },
//   { id: 8, title: "sunil", age: "29", completed: true },
// ];
