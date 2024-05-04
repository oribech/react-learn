import React, { useState, useEffect } from 'react';
import Board from './Board';
import GameOver from './GameOver';
import styles from '../styles/Game.module.css'; // Make sure this path is correct

function Game() {
  const [cells, setCells] = useState(Array(6).fill(Array(7).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState('red');
  const [winner, setWinner] = useState(null);  // Define the winner state here

  const checkWinner = (newCells) => {
    // Logic to check for a winner and update the state
    // Placeholder logic to be replaced with actual win-checking logic
    const checkVertical = () => {
      // Example for vertical check
    };
    const checkHorizontal = () => {
      // Example for horizontal check
    };
    // Call these functions or implement logic here
  };

  const placePiece = (colIndex) => {
    if (!winner) {  // Use the 'winner' state to determine if the game should continue
      const newCells = cells.map(row => [...row]);  // Copy the cells for immutability
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
  }, [cells, winner]);  // Add 'winner' as a dependency to re-check when it changes

  return (
    <div className={styles.game}>
      <Board cells={cells} placePiece={placePiece} />
      {winner && <GameOver winner={winner} />}  // Display GameOver component if there's a winner
    </div>
  );
}

export default Game;
