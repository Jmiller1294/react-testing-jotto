import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';

const words = [
  { guessedWord: 'train', letterMatchCount: 3 }
]

function App() {
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

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
