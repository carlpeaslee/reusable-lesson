import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tweet from './components/Tweet'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">

          <Tweet
            name={'carl'}
            tweet={'this is the body of the tweet'}
            date={'03/06/1989'}
          />
          <Tweet/>

        </div>
      </div>
    );
  }
}

export default App;
