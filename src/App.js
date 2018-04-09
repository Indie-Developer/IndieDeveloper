import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      <img src={logo} className="App-logo" alt="logo" />
      <p style={{color: 'white'}}>
        <a href="mailto:blake@indiedeveloper.io">blake@indiedeveloper.io</a>
      </p>
      <p style={{color: 'white'}}>
        <a style={{textDecoration: "none"}} href="tel:919-559-2872">919.559.2872</a>
      </p>
      </div>
    );
  }
}

export default App;
