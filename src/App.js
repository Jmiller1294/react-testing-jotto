import './App.css';
import React, { useEffect } from 'react';
import GuessedWords from './GuessedWords';
import { getSecretWord } from './actions';
import Congrats from './Congrats';
import Input from './Input';

const words = [
  { guessedWord: 'train', letterMatchCount: 3 }
]

function App() {
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  useEffect(() => {
    getSecretWord();
  }, [])


  return (
    <div data-test="component-app" className="container">
    <h2>Jotto</h2>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords}/>
    </div>
  );
}

export default App;
