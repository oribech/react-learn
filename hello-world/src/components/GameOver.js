// src/components/Game.js
import React, { useState, useEffect } from 'react';
import Board from './Board';
import GameOver from './GameOver';
import '../styles/Game.css';

function Game() {
  const [cells, setCells] = useState(Array(6).fill(Array(7).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState('red');
  const [winner, setWinner] = useState(null);

  const checkWinner = (cells) => {
    // Add winning logic here
  };

  const placePiece = (colIndex) => {
    if (!winner) {
      const newCells = [...cells];
      for (let i = newCells.length - 1; i >= 0; i--) {
        if (!newCells[i][colIndex]) {
          newCells[i][colIndex] = currentPlayer;
          setCurrentPlayer(currentPlayer === 'red' ? 'yellow' : 'red');
          setCells(newCells);
          checkWinner(newCells);
          break;
        }
      }
    }
  };

  useEffect(() => {
    checkWinner(cells);
  }, [cells]);

  return (
    <div className="game">
      <Board cells={cells} placePiece={placePiece} />
      {winner && <GameOver winner={winner} />}
    </div>
  );
}

export default Game;
