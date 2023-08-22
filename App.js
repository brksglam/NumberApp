import React, { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [sortedNumbers, setSortedNumbers] = useState({
    ascending: [],
    descending: [],
  });

  const handleInputChange = (event) => {
    const input = event.target.value;
    if (/^\d*$/.test(input)) {
      setInputValue(input);
    }
  };

  const addNumber = () => {
    if (inputValue !== '') {
      setNumbers([...numbers, Number(inputValue)]);
      setInputValue('');
    }
  };

  const sortNumbers = () => {
    const sortedAscending = [...numbers].sort((a, b) => a - b);
    const sortedDescending = [...numbers].sort((a, b) => b - a);
    setSortedNumbers({
      ascending: sortedAscending,
      descending: sortedDescending,
    });
  };

  const clearNumbers = () => {
    setNumbers([]);
    setSortedNumbers({
      ascending: [],
      descending: [],
    });
  };

  return (
    <div className="App">
      <h1>Number Sorting App</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a number"
        />
        <button onClick={addNumber} disabled={inputValue === ''}>
          Add
        </button>
      </div>
      <div className="sort-buttons">
        <button onClick={sortNumbers} disabled={numbers.length === 0}>
          Sort
        </button>
        <button onClick={clearNumbers}>Clear</button>
      </div>
      <div className="number-list">
        <h2>Entered Numbers</h2>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
      {sortedNumbers.ascending.length > 0 && (
        <div className="number-list">
          <h2>Ascending Order</h2>
          <ul>
            {sortedNumbers.ascending.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      )}
      {sortedNumbers.descending.length > 0 && (
        <div className="number-list">
          <h2>Descending Order</h2>
          <ul>
            {sortedNumbers.descending.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
