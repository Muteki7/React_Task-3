// src/App.js
import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
