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
          placeholder="Enter a word (up to 5 letters)"
        />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default WordInput;

