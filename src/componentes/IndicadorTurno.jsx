import React from 'react';

export default function IndicadorTurno({ turno, ganador }) {
  if (ganador) {
    return null;
  } else {
    return (
      <div className="indicadorTurno">
        <div className={turno === 'X' ? 'turnoActivo' : ''}>X</div>
        <div className={turno === 'O' ? 'turnoActivo' : ''}>O</div>
      </div>
    );
  }
}
