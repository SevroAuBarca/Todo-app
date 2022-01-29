import React from "react";
import "../styles/TodoItem.css";
import "../styles/App.css";

export const TodoItem = (props) => {
  return (
    <li className="todo-li glassmorphism-effect">
      <span
        onClick={() => props.completeTodos(props.text)}
        className={`todo-li-item check ${
          props.completed && "completed"
        } glassmorphism-effect`}
      >
        <i
          className={`${
            props.completed ? "far fa-check-square " : "far fa-square"
          }  `}
        ></i>
      </span>
      <p className={`todo-li-item text ${props.completed && "completed"} `}>
        {props.text}
      </p>
      <span
        onClick={() => props.deletedTodo(props.text)}
        className={`todo-li-item exit glassmorphism-effect`}
      >
        <i className={`far fa-times-circle`}></i>
      </span>
    </li>
  );
};
