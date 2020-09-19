import React, { Component } from "react";
import "./SelectingContainer.css";
import Inputs from "./Inputs.js";

class SelectingContainer extends Component {
  render() {
    return (
      <div className="space">
        <div className="selections">
          <Inputs textsearched={(value) => this.props.textsearched(value)} />
        </div>
      </div>
    );
  }
}
export default SelectingContainer;
