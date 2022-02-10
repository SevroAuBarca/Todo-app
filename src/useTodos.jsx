import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const TodoContext = React.createContext();

export const useTodos = () => {
  const { todos, saveTodos, loading, error, sincronized } = useLocalStorage(
    "TODOS_V1",
    []
  );
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => todo.complete).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];

    if (newTodos[todoIndex].complete) {
      newTodos[todoIndex].complete = false;
    } else {
      newTodos[todoIndex].complete = true;
    }

    saveTodos(newTodos);
  };

  const deletedTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };

  const addTodos = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      complete: false,
    });
    saveTodos(newTodos);
  };

  return {
    loading,
    error,
    sincronized,
    searchValue,
    setSearchValue,
    completedTodos,
    totalTodos,
    searchedTodos,
    completeTodos,
    deletedTodo,
    openModal,
    setOpenModal,
    addTodos,
  };
};
