import React, { useState } from 'react';

export enum ResistorValues {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9,
}

type Color = keyof typeof ResistorValues;

function ResistorComponent() {
  const [colorName, setColorName] = useState<string>('');
  const [colorValue, setColorValue] = useState<number>(-1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorName(event.target.value);
  };

  const handleButtonClick = () => {
    const value = ResistorValues[colorName as Color];
    setColorValue(value !== undefined ? value : -1);
    alert(`Color: ${colorName}, Value: ${colorValue}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter color name"
        value={colorName}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
}

export default ResistorComponent;
