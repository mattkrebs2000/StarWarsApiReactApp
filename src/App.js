import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import SelectingContainer from "./components/SelectingContainer";
import ResultsContainer from "./components/ResultsContainer";
import { Provider } from "react-redux";
import store  from "./store.js";
import {connect} from "react-redux";
import { fetchPosts } from "./actions/postActions"


class App extends Component {
  state = {
    posts: [],
    filteredposts: [],
  };

  componentWillMount() {
    this.props.fetchPosts();
  }

  textsearched = (value) => {
    let posts = [];
    for (let i in this.state.posts) {
      let match = false;
      let post = this.state.posts[i];

      for (let prop in post) {
        let lower = JSON.stringify(post[prop]).toLowerCase();
        if (lower.includes(value.toLowerCase())) {
          match = true;
        }
      }
      if (match === true) {
        posts.push(post);
      }
    }
    this.setState({ filteredposts: posts });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="container2">
          <Header />
          <img
            src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG32.png"
            alt="?"
          ></img>
          <SelectingContainer
            textsearched={(value) => this.textsearched(value)}
          />
          <ResultsContainer posts={this.state.filteredposts} />
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
 
});


export default connect(mapStateToProps, { fetchPosts })(App);
