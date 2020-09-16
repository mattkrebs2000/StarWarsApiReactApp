import React, { Component } from "react";

class Inputs extends Component {
  render() {
    return (
      <div>
        <form className="create-form">
          <div className="form-group">
            <label htmlForm="characters">Search:</label>
            <input
              type="text"
              id="findcharacters"
              name="character"
              value="Character Trait"
            />
            <button type="submit">Find!</button>
          </div>
        
        </form>
      </div>
    );
  }
}

export default Inputs;

// <div className="dropdown">
//   <button className="dropbtn"> Dropdown</button>
//   <div id="myDropdown" className="dropdown-content">
//     <input type="text" placeholder="Search.." id="myInput">
//       <a href="">About</a>
//       <a href="">Base</a>
//       <a href="">Blog</a>
//       <a href="">Contact</a>
//       <a href="">Custom</a>
//       <a href="">Support</a>
//       <a href="">Tools</a>
//     </input>
//   </div>
// </div>;
