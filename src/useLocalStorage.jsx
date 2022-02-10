import React from "react";

export const useLocalStorage = (localName, initValue) => {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [todos, setTodos] = React.useState(initValue);
  const [sinconizedItem, setSincronizedItem] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodos =
          JSON.parse(localStorage.getItem(localName)) || initValue;

        setTodos(localStorageTodos);
        setLoading(false);
        setSincronizedItem(true);
      } catch (error) {
        setError(error);
      }
    }, 3000);
  }, [initValue, localName, sinconizedItem]);

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem(localName, JSON.stringify(newTodos));
  };

  const sincronized = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

  return { todos, saveTodos, loading, error, sincronized };
};
