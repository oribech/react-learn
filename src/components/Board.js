// src/components/Board.js
import React from 'react';
import Cell from './Cell';
import '../styles/Board.css';

function Board({ cells, placePiece }) {
  return (
    <div className="board">
      {cells.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cell, colIndex) => (
            <Cell key={colIndex} value={cell} columnIndex={colIndex} placePiece={() => placePiece(colIndex)} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
