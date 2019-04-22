import React from 'react';
import './App.css';
import Plants from './components/plants'

const App = () => {

  return (
    <div className="App">
      {/* <Plant name="Efeutute" description="Schrank Wohnzimmer"/>
      <Plant name="Hängi" description="Über Fernseher links"/>
      <Plant name="Hängi" description="Über Fernseher rechts"/> */}

      <Plants />
    </div>
  );
}

export default App;
