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
        {/* <form className="create-form"> */}
          <div className="form-group styling">
            <label>Search: </label>
            <input
            onChange={ (event) => this.setState({searchtext: event.target.value})}
              onKeyUp={this.search.bind(this)}
              type="text"
              style={{
                color: "white",
                backgroundColor: "rgba(0,0,0,.2)",
                width: "180px",
              }}
            />
            <button
              type="submit" onClick={() => this.props.textsearched(this.state.searchtext)}
              style={{ color: "white", backgroundColor: "rgba(0,0,0,.2)" }}
            >
              Find!
            </button>
          </div>
        {/* </form> */}
      </div>
    );
  }
}

export default Inputs;
