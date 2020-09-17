import React, { Component } from "react";
import Header from "./components/Header"
import './App.css';
import SelectingContainer from './components/SelectingContainer';
import ResultsContainer from "./components/ResultsContainer";

class App extends Component {

  state = {
   posts: []
  }


 render() {

 var request = new Request("https://swapi.dev/api/people/");

 fetch(request)
   .then((res) => res.json())
   .then((data) => this.setState({ posts: data.results }), console.log("Hello",this.state.posts));
 
  return (
    <div className="container2">
      <Header />
      <img src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG32.png"></img>
      <SelectingContainer />
      <ResultsContainer 
      posts = {this.state.posts}/>
    </div>
  );
 }
}

export default App;
