import React from 'react';
import './App.css';

import Canvas from './Canvas.js';
// import CanvasController from './CanvasController.js'

function App() {

  const canvas = React.createRef();

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Canvas cvsref={canvas} />
      {/* <CanvasController cvsref={canvas} /> */}
    </div>
  );
}

export default App;
