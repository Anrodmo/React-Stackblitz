export default function HistorialJugadas({
  historialTablero = [],
  volverEstado,
}) {
  const jugadasRestantes = 9 - historialTablero.length;
  return (
    <div className="pasos">
      {historialTablero.map((estado, i) => {
        return (
          <div className="fluorescent" key={i}>
            {i + 1}
          </div>
        );
      })}

      {[...Array(jugadasRestantes).keys()].map((n) => {
        return (
          <div key={historialTablero.length + n}>
            {historialTablero.length + n + 1}
          </div>
        );
      })}
    </div>
  );
}
