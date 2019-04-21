import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Plant from "./components/plant"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Plant />
        <Plant />
        <Plant />
      </div>
    );
  }
}

export default App;
