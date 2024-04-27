import React, { useState, } from 'react';

export const colorCode = (color: string) => {
  return COLORS.indexOf(color);
};

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

function ColorCodeComponent() {
  const [inputColor, setInputColor] = useState('');
  const [colorIndex, setColorIndex] = useState(null);

  const handleColorSearch = () => {
    const index = colorCode(inputColor);
    setColorIndex(index);
  };

  return (
    <div>
      <p>Color indices:</p>
      <ul>
        {COLORS.map((color, index) => (
          <li key={color}>
            {color}: {index}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputColor}
        onChange={(e) => setInputColor(e.target.value)}
        placeholder="Escribe un color..."
      />
      <button onClick={handleColorSearch}>Buscar</button>
      {colorIndex !== null && (
        <p>
          El índice del color {inputColor} es: {colorIndex}
        </p>
      )}
    </div>
  );
}

export default ColorCodeComponent;
