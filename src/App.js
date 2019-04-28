import React, {useState} from 'react';
import './App.css';
import Plants from './components/plants'
import SVGAnimation from './components/svgAnimation'

const App = () => {
  
  return (
    <div className="App">
      {/* <Plant name="Efeutute" description="Schrank Wohnzimmer"/>
      <Plant name="Hängi" description="Über Fernseher links"/>
      <Plant name="Hängi" description="Über Fernseher rechts"/> */}
      <SVGAnimation />
     {/* <Plants /> */}
    </div>
  );
}

export default App;
