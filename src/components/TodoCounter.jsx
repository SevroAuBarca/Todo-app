import React from "react";
import "../styles/TodoCounter.css";
export const TodoCounter = ({ completeTodos, totalTodos, loading }) => (
  <h2>
    {loading
      ? "Cargando Todos"
      : !totalTodos
      ? "Aun no hay Todos"
      : completeTodos === totalTodos
      ? "Has completado todos los todos"
      : `Has completado ${completeTodos} de ${totalTodos} TODOs`}
  </h2>
);
