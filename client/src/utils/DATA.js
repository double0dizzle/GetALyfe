import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch }from "react-router-dom";

const BASEURL = "https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=";
const APIKEY ="&api_key=Kcfhwk6xaDVevOVWHtH3mfVsYejS9BtoMhD1x85h" ;


 class Data extends React.Component {
    state = {
      posts: []
    }
  
    componentDidMount() {
      axios.get(BASEURL + APIKEY )
        .then(res => {
          const posts = res.data.data.children.map(obj => obj.data);
          this.setState({ posts });
        });
    }
  
    render() {
      return (
        <div>
          <h1>{`/r/${this.props.subreddit}`}</h1>
          <ul>
            {this.state.posts.map(post =>
              <li key={post.id}>{post.title}</li>
            )}
          </ul>
        </div>
      );
    }
  }
  export default Data;
  

