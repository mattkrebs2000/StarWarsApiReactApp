import React, { Component } from "react";
import "./ResultsContainer.css";
import Output from "./Output.js";

class ResultsContainer extends Component {
  render() {

  const postItems = 
     this.props.posts &&
       this.props.posts.map((info, value) => (
         <div className="space" key={value}>
           <Output
             name={info.name}
             height={info.height}
             weight={info.mass}
             hair={info.hair_color}
             eyes={info.eye_color}
             gender={info.gender}
           />
         </div>
       ))
   


    return <div>{postItems}</div>;
      
  }

}
export default ResultsContainer;
