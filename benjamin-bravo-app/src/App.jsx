import React, { useState, useEffect } from 'react';
import Formulario from './components/f';
import Tabla from './components/t';
import { obtenerJugadoresDeLocalStorage, eliminarJugadorDeLocalStorage } from './utilidades/localStorageUtils';
import './components/s.css';

const App = () => {
  const [jugadores, setJugadores] = useState([]);
  const [jugadorEditando, setJugadorEditando] = useState(null);

  useEffect(() => {
    setJugadores(obtenerJugadoresDeLocalStorage());
  }, []);

  const manejarGuardar = () => {
    setJugadores(obtenerJugadoresDeLocalStorage());
    setJugadorEditando(null);
  };

  const manejarEditar = (jugador) => {
    setJugadorEditando(jugador);
  };

  const manejarEliminar = (id) => {
    eliminarJugadorDeLocalStorage(id);
    setJugadores(obtenerJugadoresDeLocalStorage());
  };

  return (
    <div>
      <h1>Registro de Futbolistas</h1>
      <Formulario onGuardar={manejarGuardar} jugadorEditando={jugadorEditando} />
      <Tabla jugadores={jugadores} onEditar={manejarEditar} onEliminar={manejarEliminar} />
    </div>
  );
};

export default App;
