import React from "react";
import "../styles/TodoSearch.css";
import "../styles/App.css";
import { TodoContext } from "../provider/TodoContext";
export const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <TodoContext.Consumer>
      {() => (
        <input
          onChange={onSearchValueChange}
          className="todo-search glassmorphism-effect "
          type="text"
          value={searchValue}
          placeholder="search"
        />
      )}
    </TodoContext.Consumer>
  );
};
