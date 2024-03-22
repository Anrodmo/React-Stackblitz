import React from 'react';
import Casilla from './Casilla';
import IndicadorTurno from './IndicadorTurno';
import HistorialJugadas from './HistorialJugadas';
import { useState } from 'react';
import checkWinner from '../utils/checkWinner';

import '../styles.css';

export default function Tablero() {
  // aqui definimos el tablero de juego - el contenido de cada casilla
  const [tablero, setTablero] = useState(['', '', '', '', '', '', '', '', '']);
  // inicializamos turno a X
  const [turno, setTurno] = useState('X');
  // guardamos si hay ganador
  const [ganador, setGanador] = useState();
  // aqui guardamos el historial del tablero
  const [historialTablero, setHistorialTablero] = useState([]);

  // funcion para marcar las casillas del tablero
  function MarcarCasillaTablero(turno, casilla) {
    //Si la casilla no esta vacía no hacemos nada
    if (tablero[casilla - 1] !== '') return;
    //Si hay ganador no hacemos nada
    if (ganador) return;

    // Hacemos una copia del tablero
    let nuevoTablero = tablero;
    let nuevoHistorialTablero = historialTablero;

    //Marcamos la casilla elegida con el turno actual
    nuevoTablero[casilla - 1] = turno;
    nuevoHistorialTablero[historialTablero.length] = [...tablero];

    // Actualizamos los estados del tablero
    setTablero(nuevoTablero);
    setHistorialTablero(nuevoHistorialTablero);
    console.log('historial', historialTablero);

    //Comprobamos si hay ganador y si lo hay lo guardamos en su estado
    const hayGanador = checkWinner(tablero);
    if (hayGanador) {
      setGanador(hayGanador);
    }

    // Cambiamos de turno
    if (turno === 'X') {
      setTurno('O');
    } else {
      setTurno('X');
    }
  }
  // funcion para volver al estado del turno seleccionado
  function VolverEstado(estado) {
    const estadoTablero = historialTablero[estado];
    setTablero(estadoTablero);
    setGanador(undefined);

    if (estado % 2 == 0) {
      setTurno('X');
    } else {
      setTurno('O');
    }

    let nuevoHistorialTablero = [];
    for (let i = 0; i <= estado; i++) {
      nuevoHistorialTablero.push(historialTablero[estado]);
    }
    setHistorialTablero(nuevoHistorialTablero);
  }

  return (
    <>
      <IndicadorTurno turno={turno} ganador={ganador} />
      <div id="tablero">
        <Casilla
          numero={1}
          tablero={tablero}
          turno={turno}
          funMarcarTablero={MarcarCasillaTablero}
        />
        <Casilla
          numero={2}
          tablero={tablero}
          turno={turno}
          funMarcarTablero={MarcarCasillaTablero}
        />
        <Casilla
          numero={3}
          tablero={tablero}
          turno={turno}
          funMarcarTablero={MarcarCasillaTablero}
        />
        <Casilla
          numero={4}
          tablero={tablero}
          turno={turno}
          funMarcarTablero={MarcarCasillaTablero}
        />
        <Casilla
          numero={5}
          tablero={tablero}
          turno={turno}
          funMarcarTablero={MarcarCasillaTablero}
        />
        <Casilla
          numero={6}
          tablero={tablero}
          turno={turno}
          funMarcarTablero={MarcarCasillaTablero}
        />
        <Casilla
          numero={7}
          tablero={tablero}
          turno={turno}
          funMarcarTablero={MarcarCasillaTablero}
        />
        <Casilla
          numero={8}
          tablero={tablero}
          turno={turno}
          funMarcarTablero={MarcarCasillaTablero}
        />
        <Casilla
          numero={9}
          tablero={tablero}
          turno={turno}
          funMarcarTablero={MarcarCasillaTablero}
        />
      </div>
      <HistorialJugadas
        historialTablero={historialTablero}
        volverEstado={VolverEstado}
      />

      {ganador && <h1 className="fluorescent">¡Gana {ganador}!</h1>}

      <button
        className="reiniciar"
        onClick={() => {
          setTablero(['', '', '', '', '', '', '', '', '']);
          setHistorialTablero([]);
          setTurno('X');
          setGanador(undefined);
        }}
      >
        Reiniciar juego
      </button>
    </>
  );
}
