// src/Color.js
import React from 'react';

const Color = ({ color, onClick }) => {
  return (
    <div className="color-box" style={{ background: color }} onClick={onClick}></div>
  );
};

export default Color;
