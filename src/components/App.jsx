import React, { useState } from 'react';
import '../App.css';
import Plants from './plants'
import SVGAnimation from './svgAnimation'
import Navbar from './Navbar';
import AddPlant from './AddPlant';
import Settings from './Settings';

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
