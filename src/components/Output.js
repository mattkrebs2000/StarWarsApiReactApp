import React, { Component } from "react";
import "./Output.css";


class Output extends Component {
  
  render() {
    return (

       <div className="container">
        <div className="row">
          <div className="col-10">
            <div
              className="row"
              style={{
                paddingRight: 0,
                paddingTop: "10px",
                paddingLeft: "10px",
              }}
            >
              <div className="Image col-3">. .</div>
              <div className="col-5">
                <div className="row">{this.props.name}</div>
                <div className="row" style={{ fontSize: 15 }}>
                 
                </div>
              </div>
              <div
                className="drop col-2"
                style={{ float: "right", marginTop: "-20px" }}
              >
                1.75
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: "10px",
                paddingTop: "10px",
                fontSize: 15,
                backgroundColor: "rgba(0,0,0,.8)",
                overflow: "hidden",
                justifyContent: "flex-end",
                marginLeft: "0px !important",
                marginRight: "0px !important",
              }}
            >
              hello there hi <span> </span>
            </div>
          </div>
          <div
            className="drop2 col-2"
            style={{
              fontSize: 50,
              backgroundColor: "rgba(0,0,0,.6)",
              alignContent: "space-between",
            }}
          >
            <i
              style={{
                marginTop: "25px",
                backgroundColor: "rgba(0,0,0,.6)",
              }}
              className="fa fa-plus-circle"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Output;


