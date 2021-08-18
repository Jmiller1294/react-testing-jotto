import logo from './logo.svg';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

const words = [
  { guessedWord: 'train', letterMatchCount: 3 }
]

function App() {
  return (
    <div data-test="component-app" className="container">
    <h2>Jotto</h2>
      <Congrats success={false} />
      <GuessedWords guessedWords={words}/>
    </div>
  );
}

export default App;
