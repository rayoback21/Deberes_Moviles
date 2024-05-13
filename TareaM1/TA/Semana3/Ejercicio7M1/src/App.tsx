import React, { useState } from 'react';

const DnaToRnaConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleConvert = () => {
    const map = { G: 'C', C: 'G', T: 'A', A: 'U' };
    const rna = inputValue.toUpperCase().split('').map(nucleotide => {
      if (map.hasOwnProperty(nucleotide)) {
        return map[nucleotide];
      } else {
        return '';
      }
    }).join('');
    setResult(`ADN: ${inputValue}\nARN: ${rna}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter DNA"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleConvert}>Convert</button>
      <pre>{result}</pre>
    </div>
  );
};

export default DnaToRnaConverter;
