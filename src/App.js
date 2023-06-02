import React, { useState } from 'react';
import './style.css';

function App() {
  const [number, setNumber] = useState('');
  const [numbers, setNumbers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNaN(number) && number !== '') {
      setNumbers([...numbers, parseFloat(number)]);
      setNumber('');
    }
  };

  const sum = numbers.reduce((a, b) => a + b, 0);
  const average = numbers.length > 0 ? sum / numbers.length : 0;

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Podaj liczbę"
        />
        <button type="submit">Oblicz</button>
      </form>
      <div>
        <p>Suma: {sum}</p>
        <p>Średnia: {average}</p>
      </div>
    </div>
  );
}

export default App;
