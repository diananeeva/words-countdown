import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import WordInput from './WordInput';

const Game = () => {
  const [letters, setLetters] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isGameActive, setIsGameActive] = useState(false);
  const [allWords, setAllWords] = useState([]);
  const [validWords, setValidWords] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/words.txt')
      .then((response) => response.text())
      .then((data) => {
        const words = data.split('\n').map(word => word.trim().toLowerCase());
        setAllWords(words);
      });
  }, []);

  const generateLetters = () => {
    const vowels = 'AEIOU';
    const consonants = 'BCDFGHJKLMNPQRSTVWXYZ';
    let generatedLetters = [];

    for (let i = 0; i < 3; i++) {
      generatedLetters.push(vowels[Math.floor(Math.random() * vowels.length)]);
    }

    for (let i = 0; i < 4; i++) {
      generatedLetters.push(consonants[Math.floor(Math.random() * consonants.length)]);
    }

    setLetters(generatedLetters.sort(() => Math.random() - 0.5));
  };

  const startGame = () => {
    generateLetters();
    setTimeLeft(30);
    setIsGameActive(true);
    setValidWords([]);
    setMessage('');
  };

  const handleWordSubmission = (word) => {
    if (word.length < 3 || word.length > 5) {
      setMessage('The word must be between 3 and 5 letters.');
      return;
    }
    
    if (allWords.includes(word.toLowerCase())) {
      setValidWords((prevWords) => [...prevWords, word]);
      setMessage('');
    } else {
      setMessage('Invalid word! Try again.');
    }
  };

  useEffect(() => {
    if (timeLeft === 0) {
      setIsGameActive(false);
      findValidWords();
    }
  }, [timeLeft]);

  const findValidWords = () => {
    const possibleWords = allWords.filter((word) => isWordFormable(word, letters));
    setValidWords(possibleWords);
  };

  const isWordFormable = (word, letters) => {
    const availableLetters = [...letters];
    for (let char of word.toUpperCase()) {
      if (availableLetters.includes(char)) {
        availableLetters.splice(availableLetters.indexOf(char), 1);
      } else {
        return false;
      }
    }
    return true;
  };

  return (
    <div className='mainDiv'>
      <h1 className='h1'>Words Countdown</h1>
      <button onClick={startGame}>New Game</button>
      {isGameActive && (
        <>
          <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
          <div className="letters">
            Letters: {letters.map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </div>
          <WordInput letters={letters} onWordSubmit={handleWordSubmission} />
          {message && <p>{message}</p>} 
          <div className="validWords">
            <h3>Your valid words:</h3>
            <ul>
              {validWords.map((word, index) => (
                <li key={index}>{word}</li>
              ))}
            </ul>
          </div>
        </>
      )}
      {timeLeft === 0 && (
        <div className="possibleWords">
          <h2>Possible words:</h2>
          <ul>
            {validWords.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Game;


