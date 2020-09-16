import React, { Component } from "react";
import "./ResultsContainer.css";
import Output from "./Output.js";

class ResultsContainer extends Component {
  render() {
    return (
      <div row className="space">
        <div className="Results">
          <Output />
          
        </div>
      </div>
    );
  }
}
export default ResultsContainer;
