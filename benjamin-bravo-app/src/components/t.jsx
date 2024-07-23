import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';

const Tabla = ({ jugadores, onEditar, onEliminar }) => {
  return (
    <TableContainer component={Paper} className="container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Edad</TableCell>
            <TableCell>Nacionalidad</TableCell>
            <TableCell>Equipo</TableCell>
            <TableCell>Posición</TableCell>
            <TableCell>Habilidades</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jugadores.map((jugador) => (
            <TableRow key={jugador.id}>
              <TableCell>{jugador.nombre}</TableCell>
              <TableCell>{jugador.edad}</TableCell>
              <TableCell>{jugador.nacionalidad}</TableCell>
              <TableCell>{jugador.equipo}</TableCell>
              <TableCell>{jugador.posicion}</TableCell>
              <TableCell>{jugador.habilidades.join(', ')}</TableCell>
              <TableCell>
                <Button onClick={() => onEditar(jugador)} color="primary">Editar</Button>
                <Button onClick={() => onEliminar(jugador.id)} color="secondary">Eliminar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tabla;
