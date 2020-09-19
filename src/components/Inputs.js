import React, { Component } from "react";
import "./Inputs.css";


class Inputs extends Component {

  render() {
    return (
      <div>
        {/* <form className="create-form"> */}
          <div className="form-group styling">
            <label>Search: </label>
            <input
            id="inputs"
            onChange={ (event) => this.setState({searchtext: event.target.value})}
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
              Filter!
            </button>
          </div>
        {/* </form> */}
      </div>
    );
  }
}

export default Inputs;
