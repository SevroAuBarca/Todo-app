import React from "react";
import "../styles/TodoForm.css";

export const TodoForm = (props) => {
  const [labelTxt, setLabelTxt] = React.useState("Escribe Tu Tarea");
  const [text, setText] = React.useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onCancel = () => {
    props.setOpenModal(false);
  };

  const onCreate = (e) => {
    e.preventDefault();
    if (text === "") {
      setLabelTxt("No has escrito nada");
    } else {
      props.addTodos(text);
      onCancel();
    }
  };

  return (
    <form onSubmit={onCreate} className="form-todo glassmorphism-effect">
      <label className="label-todo">{labelTxt}</label>
      <textarea
        placeholder="Escribe aqui"
        className="area-todo"
        value={text}
        onChange={onChange}
      ></textarea>
      <div>
        <button onClick={onCancel} className="button-todo cancel">
          Cancel
        </button>
        <button type="submit" className="button-todo create">
          Create
        </button>
      </div>
    </form>
  );
};
