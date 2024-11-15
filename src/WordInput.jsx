import React, { useState } from 'react';

const WordInput = ({ letters, onWordSubmit }) => {
  const [word, setWord] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onWordSubmit(word);  
    setWord('');  
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Въведете дума (до 5 букви)"
        />
        <button type="submit">Потвърди</button>
      </form>
    </div>
  );
};

export default WordInput;

