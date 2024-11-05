import React, { Component } from 'react';
import './App.css';
import Post from './components/Post/Post';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Post></Post>
      </div>
    );
  }
}

export default App;
