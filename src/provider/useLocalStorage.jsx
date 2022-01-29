import React from "react";

export const useLocalStorage = (localName, initValue) => {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [todos, setTodos] = React.useState(initValue);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodos =
          JSON.parse(localStorage.getItem(localName)) || initValue;

        setTodos(localStorageTodos);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem(localName, JSON.stringify(newTodos));
  };

  return { todos, saveTodos, loading, error };
};
