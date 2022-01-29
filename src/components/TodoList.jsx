import React from "react";
import "../styles/TodoList.css";
export const TodoList = (props) => (
  <ul className="todo-ul">{props.children}</ul>
);
