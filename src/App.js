import React, { useState } from 'react';
import './App.css';
import Plants from './components/plants'
import SVGAnimation from './components/svgAnimation'
import Navbar from './components/Navbar';
import AddPlant from './components/AddPlant';
import Settings from './components/Settings';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/" component={Plants} />
        <Route path="/add" component={AddPlant} />
        <Route path="/settings" component={Settings} />

      </div>
    </Router>
  );
}

export default App;
