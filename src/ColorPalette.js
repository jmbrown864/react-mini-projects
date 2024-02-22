// ColorPalette.js

import React, { useState } from 'react';

const ColorPalette = () => {
  const [colors, setColors] = useState(['#ff5733', '#33ff57', '#5733ff']); // Initial colors state
  const [newColor, setNewColor] = useState('');

  const addColor = (e) => {
    // Implement the logic to add a new color
    e.preventDefault();

    if (newColor != '') {
        setColors([...colors, newColor]);
        setNewColor('');
    }
  };

  const removeColor = (index) => {
    // Implement the logic to remove a color at the specified index
    const updatedColors = [...colors];
    updatedColors.splice(index, 1);
    setColors(updatedColors);
  };

  return (
    <div>
      <h1>Color Palette</h1>
      <form onSubmit={addColor}>
        <input
          type="text"
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
          placeholder="Enter a color"
        />
        <button type="submit">Add Color</button>
      </form>
      <div>
        {colors.map((color, index) => (
          <div key={index} style={{ backgroundColor: color }}>
            <button onClick={() => removeColor(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
