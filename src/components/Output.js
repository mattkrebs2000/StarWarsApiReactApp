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
              <div className="CharacterImage col-3">
                {this.props.name === "R2-D2" ? <img src="./images/R2-D2.png" alt="?"></img> : this.props.name === "C-3PO" ? <img src="./images/C-3PO.png" alt="?"></img>: this.props.name === "Luke Skywalker" ? <img src="./images/Luke Skywalker.png" alt="?"></img>: this.props.name === "Beru Whitesun lars" ? <img src="./images/Beru Whitesun lars.png" alt="?"></img>: this.props.name === "Biggs Darklighter" ? <img src="./images/Biggs Darklighter.png" alt="?"></img>: this.props.name === "Darth Vader" ? <img src="./images/Darth Vader.png" alt="?"></img>:this.props.name === "Leia Organa" ? <img src="./images/Leia Organa.png" alt="?"></img>:this.props.name === "Obi-Wan Kenobi" ? <img src="./images/Obi-Wan Kenobi.png" alt="?"></img>:this.props.name === "Owen Lars" ? <img src="./images/Owen Lars.png" alt="?"></img>:this.props.name === "R5-D4" ? <img src="./images/R5-D4.png" alt="?"></img>: "image"}
              </div>
              <div className="col-5">
                <div className="row">{this.props.name}</div>
                <div className="row" style={{ fontSize: 15 }}>
                  HT/WT:{this.props.height}/{this.props.weight}
                </div>
              </div>
              <div
                className="drop col-2"
                style={{ float: "right", marginTop: "-20px" }}
              >
                {this.props.gender}
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
              eyes:{this.props.eyes} hair:{this.props.hair} <span> </span>
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
