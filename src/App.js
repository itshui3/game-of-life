// App is a general wrapper that houses all the functionality

import React from 'react';
import './App.css';

import Controller from './Controller.js';
// import CanvasController from './CanvasController.js'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Controller />
    </div>
  );
}

export default App;
