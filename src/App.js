import React, { Component } from 'react';
import speedbrave from './speedbrave.jpg';
import './App.css';
import Flash from './Flash.jsx';
import List from './List.jsx';
import Advisory from './Advisory.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="App-title">Seizures and Physical Reactions</h1>
      <figure>
        <img src={speedbrave} className="speedbrave" alt="speedbrave" />
        <figcaption>
          <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&showtechniques=23%2C231%2C232%2C241">speedbrave.jpg</a>
        </figcaption>
      </figure>
      <div className="App-intro">Seizures</div>
        <Flash />
        <h2>⚒️</h2>
        <List />
        <Advisory />
      </div>
    );
  }
}

export default App;
