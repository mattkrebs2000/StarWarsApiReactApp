import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store  from "./store.js";
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
