import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import SelectingContainer from "./components/SelectingContainer";
import ResultsContainer from "./components/ResultsContainer";
import { Provider } from "react-redux";
import store  from "./store.js";
import {connect} from "react-redux";
import { fetchPosts } from "./actions/postActions"
import Pages from "./pages/pages";



class App extends Component {

  render() {
    return (
      <Provider store={store}>
         <Pages />
      </Provider>
    );
  }
}


export default App;
