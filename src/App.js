import logo from './logo.svg';
import eggontoast from './eggontoast.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my personal page! My name is Kath. 
           {/*Remember to <code>src/App.js</code> and save to reload. */}
        </p>
        <h3>CSS Art</h3>
        <a
          className="App-link"
          href="https://codepen.io/kittikath/pen/WNjbzXK"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my Egg on Toast :) 
        </a>
        <img src={eggontoast} alt="logo" />
      </header>
    </div>
  );
}

export default App;
