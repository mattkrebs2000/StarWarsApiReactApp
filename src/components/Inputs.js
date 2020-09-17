import React, { Component } from "react";
import "./Inputs.css";
import json from "./data/data.json";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = { suggestions: [] };
    this.search = this.search.bind(this);
  }

  search(event) {
    let input = event.target.value;
   
    let matches = [],
      i;

    if (input.length > 1) {
      for (i = 0; i < json.length; i++) {
        if (json[i].match(input)) {
          matches.push(json[i]);
        }
      }
    }

    this.setState({ suggestions: matches });
  }

  render() {
    return (
      <div>
        <form className="create-form">
          <div className="form-group styling">
            <label htmlForm="characters">Search:</label>
            <input
              onKeyUp={this.search.bind(this)}
              type="text"
              style={{ color: "white", backgroundColor: "rgba(0,0,0,.2)" }}
            />
            <React.Fragment>
              <ul style={{ listStyleType: "none" }}>
                {this.state.suggestions.map((res) => (
                  <li key={res}>{res}</li>
                ))}
              </ul>
            </React.Fragment>
            <button
              type="submit"
              style={{ color: "white", backgroundColor: "rgba(0,0,0,.2)" }}
            >
              Find!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Inputs;
