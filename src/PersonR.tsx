import React from "react";
import "./App.scss";
import Person from "./PersonEntity";
//import Person from "./PersonEntity";

export default function PersonR(props: Person) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your age of : {props.id}</p>
    </div>
  );
}
