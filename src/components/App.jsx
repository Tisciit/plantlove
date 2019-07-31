import React from 'react';
import '../App.css';
import Plants from './Plants'
//import SVGAnimation from './svgAnimation'
import Navbar from './Navbar';
import AddPlant from './AddPlant';
import Settings from './Settings';
import {useEffect} from "react";
import {idbGetDefaultPlants} from "../store/actions";
import {useDispatch} from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    //This will run once the app loads. It´s the perfect time to update our App States from indexedDB

    dispatch(idbGetDefaultPlants());
  },[]);
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
