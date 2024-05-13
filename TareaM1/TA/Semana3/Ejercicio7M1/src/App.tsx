import { useState } from 'react';

function toRna(dna) {
    const Map = { G: 'C', C: 'G', T: 'A', A: 'U' };

    return dna.split('').map(m => Map[m]).join('');
}

function App() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const handleConvert = () => {
        try {
            const rna = toRna(inputValue.toUpperCase());
            setResult(`ADN: ${inputValue}\nARN: ${rna}`);
        } catch (error) {
            setResult('Error: Invalid input DNA.');
        }
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
}

export default App;
