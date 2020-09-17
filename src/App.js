import React from 'react';
import Header from "./components/Header"
import './App.css';
import SelectingContainer from './components/SelectingContainer';
import ResultsContainer from "./components/ResultsContainer";







function App() {

// var request = new Request("https://swapi.dev/api/people/");

// fetch(request)
//   .then((res) => res.json())
//   .then((data) => console.log(data))

  return (
    <div className="container2">
      <Header />
      <img src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG32.png"></img>
      <SelectingContainer />
      <ResultsContainer />
    </div>
  );
}

export default App;
