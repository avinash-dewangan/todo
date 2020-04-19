import React from "react";
import Place from "../model/place";

export default function PlaceReturn(props: Place) {
  return (
    <div className="person">
      <h1>{props.City}</h1>
      <strong>State : {props.State}</strong>
      <p>District : {props.District}</p>
    </div>
  );
}
