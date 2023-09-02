import './App.css';
import NavBar from "./components/navbar.js";
import Main from './components/main.js'
import Joke from './components/joke.js'

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      />
    </>
  );
}

export default App;
