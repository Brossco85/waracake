import React, { Component } from 'react';
// import logo from './logo.svg';
import { Image } from 'react-bootstrap';
import logo from './w-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Image src={logo} className="navbar-brand" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
