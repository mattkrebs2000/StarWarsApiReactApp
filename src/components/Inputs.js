import React, { Component } from "react";
import "./Inputs.css";

class Inputs extends Component {
  render() {
    return (
      <div>
        <form className="create-form">
          <div className="form-group styling">
            <label htmlForm="characters">Search:</label>
            <input
              type="text"
              id="findcharacters"
              name="character"
              value="Character Trait"
              style={{ color: "white", backgroundColor: "rgba(0,0,0,.2)" }}
            />
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
