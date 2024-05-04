// src/components/Cell.js
import React from 'react';
import '../styles/Cell.css';

function Cell({ value, placePiece }) {
  return (
    <div className="cell" onClick={placePiece}>
      <div className={value ? `disc ${value}` : 'empty'}></div>
    </div>
  );
}

export default Cell;
