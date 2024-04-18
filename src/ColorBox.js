import React, { useState } from 'react';
import './ColorBox.css';

const ColorBox = ({ defaultColor }) => {
  const [currentColor, setCurrentColor] = useState('white');
  const [textColor, setTextColor] = useState('black'); // Default text color

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setCurrentColor(newColor);
  };

  const toggleTextColor = () => {
    setTextColor((prevColor) => (prevColor === 'black' ? 'white' : 'black'));
  };

  return (
    <div className="container">
      <div>
        <h1>Color Change Box </h1>
        <input
          type="text"
          placeholder="Enter color"
          value={currentColor}
          onChange={handleColorChange}
        />
        <div className="color-box" style={{ backgroundColor: currentColor, color: textColor }}>
          {currentColor}
        </div>
        <div className="button-container">
          <button onClick={toggleTextColor}>
            Toggle Text Color ({textColor})
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorBox;
