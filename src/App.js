import logo from './logo.svg';
import './App.css';
import GuessedWords from './GuessedWords';

const words = [
  
]

function App() {
  return (
    <div className="App">
      <GuessedWords guessedWords={words}/>
    </div>
  );
}

export default App;
