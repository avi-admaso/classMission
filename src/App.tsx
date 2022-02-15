import React from 'react';
import logo from './logo.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
import './App.css';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='balagan'>

        <img src={logo} className="App-logo" alt="amir" />
        <img src={logo2} className="App-logo" alt="amir" />
        <img src={logo3} className="App-logo" alt="amir" />
        <img src={logo4} className="App-logo" alt="amir" />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Home/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
