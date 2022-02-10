import React from "react";
export const TodoList = (props) => {
  const renderFunc = props.children || props.render;
  return (
    <ul>
      {props.error
        ? props.onError()
        : props.loading
        ? props.onLoading()
        : !props.loading && !props.totalTodos
        ? props.onEmptyTodos()
        : props.totalTodos &&
          !props.searchedTodos.length &&
          props.onEmptySearch(props.searchValue)}

      {!props.loading && props.searchedTodos.map(renderFunc)}
    </ul>
  );
};
