import React, { Component } from "react";
import Header from "../components/Header";
import "../App.css";
import SelectingContainer from "../components/SelectingContainer";
import ResultsContainer from "../components/ResultsContainer";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: props.characters,
            filteredposts: props.characters,
        };
    }


componentDidUpdate() {
// if the state has not been set with the characters then set the state. 
if (this.props.characters !== this.state.posts){
this.setState({posts:this.props.characters, filteredposts:this.props.characters})
}
}

  componentWillMount() {
    this.props.fetchPosts()
  }

  textsearched = (value) => {
    let posts = [];
    for (let i in this.state.posts) {
      let match = false;
      let post = this.state.posts[i];

      for (let prop in post) {
        let lower = JSON.stringify(post[prop]).toLowerCase();
        if (lower.startsWith(value.toLowerCase(),1)) {
          match = true;

          console.log(lower, " and " ,value)
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
      <div className="container2">
        <Header />
        <img class="starwars"
          src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG32.png"
          alt="?"
        ></img>
        <SelectingContainer
          textsearched={(value) => this.textsearched(value)}
        />
        {this.state.filteredposts != null && <ResultsContainer posts={this.state.filteredposts} />}
      </div>
    );
  }
}
const mapStateToProps = state => {
    return {
        characters: state.posts.characters
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
