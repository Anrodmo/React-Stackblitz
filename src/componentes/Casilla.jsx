import React from 'react';
import '../styles.css';

export default function Casilla({ tablero, numero, turno, funMarcarTablero }) {
  return (
    <div
      className="fluorescent casilla"
      onClick={() => funMarcarTablero(turno, numero)}
    >
      {tablero[numero - 1]}
    </div>
  );
}
