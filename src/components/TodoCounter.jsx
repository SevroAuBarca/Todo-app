import React from "react";
import "../styles/TodoCounter.css";
import { TodoContext } from "../provider/TodoContext";
export const TodoCounter = () => (
  <TodoContext.Consumer>
    {(value) => (
      <h2>
        {value.completedTodos === value.totalTodos
          ? "Has completado todos los todos"
          : `Has completado ${value.completedTodos} de ${value.totalTodos} TODOs`}
      </h2>
    )}
  </TodoContext.Consumer>
);
