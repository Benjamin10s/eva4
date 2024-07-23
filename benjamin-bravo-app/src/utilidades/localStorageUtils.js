export const obtenerJugadoresDeLocalStorage = () => {
    const jugadores = localStorage.getItem('jugadores');
    return jugadores ? JSON.parse(jugadores) : [];
  };
  
  export const guardarJugadorEnLocalStorage = (jugador) => {
    const jugadores = obtenerJugadoresDeLocalStorage();
    if (jugador.id) {
      const jugadorIndex = jugadores.findIndex(j => j.id === jugador.id);
      jugadores[jugadorIndex] = jugador;
    } else {
      jugador.id = Date.now();
      jugadores.push(jugador);
    }
    localStorage.setItem('jugadores', JSON.stringify(jugadores));
  };
  
  export const eliminarJugadorDeLocalStorage = (id) => {
    const jugadores = obtenerJugadoresDeLocalStorage();
    const jugadoresActualizados = jugadores.filter(jugador => jugador.id !== id);
    localStorage.setItem('jugadores', JSON.stringify(jugadoresActualizados));
  };
  