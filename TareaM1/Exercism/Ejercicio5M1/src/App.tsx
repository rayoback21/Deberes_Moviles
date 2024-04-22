import React, { useState } from 'react';

const dict: { [key: string]: number } = {
  "black": 0, "brown": 1, "red": 2, "orange": 3, "yellow": 4,
  "green": 5, "blue": 6, "violet": 7, "grey": 8, "white": 9
};

function ResistorValueComponent() {
  const [colours, setColours] = useState<string[]>([]);
  const [decodedValue, setDecodedValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newColours = [...colours];
    newColours[index] = event.target.value;
    setColours(newColours);
  };

  const handleButtonClick = () => {
    const amount = parseInt(
      dict[colours[0]].toString() +
      dict[colours[1]].toString() +
      "0".repeat(dict[colours[2]])
    ).toString();

    let decodedAmount = amount;
    if (amount.endsWith("000000000")) {
      decodedAmount = amount.slice(0, -9) + " gigaohms";
    } else if (amount.endsWith("000000")) {
      decodedAmount = amount.slice(0, -6) + " megaohms";
    } else if (amount.endsWith("000")) {
      decodedAmount = amount.slice(0, -3) + " kiloohms";
    } else {
      decodedAmount += " ohms";
    }

    setDecodedValue(decodedAmount);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter color 1"
        value={colours[0] || ''}
        onChange={(e) => handleInputChange(e, 0)}
      />
      <input
        type="text"
        placeholder="Enter color 2"
        value={colours[1] || ''}
        onChange={(e) => handleInputChange(e, 1)}
      />
      <input
        type="text"
        placeholder="Enter color 3"
        value={colours[2] || ''}
        onChange={(e) => handleInputChange(e, 2)}
      />
      <button onClick={handleButtonClick}>Decode</button>
      <div>{decodedValue}</div>
    </div>
  );
}

export default ResistorValueComponent;
