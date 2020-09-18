import React, { Component } from "react";
import "./ResultsContainer.css";
import Output from "./Output.js";

class ResultsContainer extends Component {

render() {

    return (
      <div>
        {this.props.posts.map((info) => (
          <div className="space">
            <Output
              name={info.name}
              height={info.height}
              weight={info.mass}
              hair={info.hair_color}
              eyes={info.eye_color}
              gender={info.gender}
            />
          </div>
        ))}
      </div>
    );
  }
}
export default ResultsContainer;


