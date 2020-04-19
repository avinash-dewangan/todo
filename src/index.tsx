import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
import PlaceApp from "./JSX/place";
import "./footer.scss";
import "./header.scss";
import "./App.scss";
import "./SCSS/place.scss";

ReactDOM.render(
  <React.StrictMode>
    <PlaceApp />
  </React.StrictMode>,
  document.getElementById("root")
);
