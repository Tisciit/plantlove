import React from 'react';
import './App.css';
import Plant from "./components/plant"

const App = () => {

  return (
    <div className="App">
      <Plant name="Efeutute" description="Schrank Wohnzimmer"/>
      <Plant name="Hängi" description="Über Fernseher links"/>
      <Plant name="Hängi" description="Über Fernseher rechts"/>
    </div>
  );
}

export default App;
