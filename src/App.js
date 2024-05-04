import React from 'react';
import './App.css';
import Game from './components/Game';  // Ensure this path is correct based on your directory structure

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Connect Four</h1>
      </header>
      <Game />  // This line adds the game to your application
    </div>
  );
}

export default App;
