import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Nav from './Components/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
