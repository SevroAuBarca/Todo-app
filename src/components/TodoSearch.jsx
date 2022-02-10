import React from "react";
import "../styles/TodoSearch.css";
import "../styles/App.css";
//import { TodoContext } from "../provider/TodoContext";
export const TodoSearch = ({ searchValue, setSearchValue, loading }) => {
  //const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      className="todo-search glassmorphism-effect "
      onChange={onSearchValueChange}
      type="text"
      value={searchValue}
      placeholder="search"
      disabled={loading}
    />
  );
};
