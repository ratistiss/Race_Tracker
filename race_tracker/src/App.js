import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Nav from './Components/Nav'
import './App.css';
import Standings from './Components/Standings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </header>
      <body className='body'>
        <Standings />
      </body>
    </div>
  );
}

export default App;
