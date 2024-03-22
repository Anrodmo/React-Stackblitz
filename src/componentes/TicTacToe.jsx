import React from 'react';
import Tablero from './Tablero';
import IndicadorTurno from './IndicadorTurno';

import '../styles.css';

export default function TicTacToe() {
  return (
    <>
      <h1 className="fluorescent title">Tic Tac Toe</h1>
      <Tablero />
    </>
  );
}
