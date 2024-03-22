export default function checkWinner(tablero) {
  // Función que comprueba si existe ganador
  // ENTRADAS
  //    tablero - array de 9 posiciones con el estado del tablero
  // SALIDAS
  //    true / null - si hay o no hay ganador

  // Combinaciones de índices para formar líneas ganadoras
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Filas

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columnas

    [0, 4, 8],
    [2, 4, 6], // Diagonales
  ];

  // Comprobar todas las combinaciones para ver si hay un ganador

  // Por cada combinación ganadora
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    // Comprobamos si el estado del tablero coincide con la combinación
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      return tablero[a]; // Devolver el jugador que ha ganado ('X' o 'O')
    }
  }

  return null; // Si no hay ganador
}
