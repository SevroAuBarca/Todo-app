import React from "react";
import "../styles/CreateTodobutton.css";

export const CreateTodoButton = (props) => {
  const toggleClick = () => {
    props.setOpenModal(!props.openModal);
  };

  return (
    <button className="todo-button" onClick={toggleClick}>
      +
    </button>
  );
};
