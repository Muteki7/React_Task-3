// src/ColorPicker.js
import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: null,
    };
  }

  handleColorClick = (color) => {
    this.setState({ selectedColor: color });
    document.body.style.backgroundColor = color; // Change the background color
  };

  render() {
    const { colors } = this.props;
    const { selectedColor } = this.state;

    return (
      <div className="color-picker">
        <h1>Color Picker</h1>
        <button onClick={() => this.handleColorClick(null)}>Pick a color</button>
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-box"
              style={{ background: color }}
              onClick={() => this.handleColorClick(color)}
            ></div>
          ))}
        </div>
        {selectedColor && (
          <div className="selected-color">
            Selected Color: <div className="color-box" style={{ background: selectedColor }}></div>
          </div>
        )}
      </div>
    );
  }
}

export default ColorPicker;
