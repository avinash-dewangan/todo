import React, { Component } from "react";
import axios from "axios";
import Place from "../model/place";
import PlaceReturn from "../HTMLRender/PlaceReturn";

export default class PlaceApp extends Component {
  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get(`https://indian-cities-api-nocbegfhqg.now.sh/cities`)
      .then((response) => {
        this.setState({ data: response.data, loading: false });
        console.log(response.data);
      });
  }

  render() {
    if (this.state.loading) {
      return "Loading...";
    } else {
      let custs: Array<Place> = this.state.data;
      console.log("render");
      let listItems = custs.map((post, index) => (
        <PlaceReturn
          key={index}
          City={post.City}
          State={post.State}
          District={post.District}
        />
      ));
      return (
        <React.Fragment>
          <div className="city">Indian cities name information</div>
          {listItems}
        </React.Fragment>
      );
    }
  }
}
