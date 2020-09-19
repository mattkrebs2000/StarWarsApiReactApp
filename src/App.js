import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import SelectingContainer from "./components/SelectingContainer";
import ResultsContainer from "./components/ResultsContainer";


class App extends Component {
  state = {
    posts: [],
    filteredposts: [],
  };

  componentDidMount() {
    var request = new Request("https://swapi.dev/api/people/?50/");

    fetch(request)
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data.results, filteredposts: data.results }));

  }

  textsearched = (value) => {
    let posts =[];
    for(let i in this.state.posts){
      let match=false;
      let post=this.state.posts[i]
      for(let prop in post){
        if(post[prop].includes(value)){
          match=true;
        }
      }
      if(match == true) {
        posts.push(post)
      }
    }
    this.setState({filteredposts:posts})
    ; 
  }


  render() {
    return (
      <div className="container2">
        <Header />
        <img src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG32.png"></img>
        <SelectingContainer 
        textsearched = { (value) => this.textsearched(value)}
        />
        <ResultsContainer posts={this.state.filteredposts} />
      </div>
    );
  }
}

export default App;
