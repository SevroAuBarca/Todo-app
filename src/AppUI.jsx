import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoContext } from "./provider/TodoContext";
import { Modal } from "./components/Modal";
import { TodoForm } from "./components/TodoForm";

export const AppUI = (props) => {
  const { openModal, setOpenModal, addTodos } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <section className="todo search-section glassmorphism-effect">
        <TodoCounter />
        <TodoSearch />
      </section>
      <section className="todo list-section glassmorphism-effect">
        <TodoContext.Consumer>
          {(value) => (
            <TodoList>
              {value.error && <h2>Desespérate, hubo un error...</h2>}
              {value.loading && <h2>Esta cargando, no desesperes</h2>}
              {!value.loading && value.searchedTodos.length === 0 && (
                <h2>Agrega tu priner TODO</h2>
              )}

              {value.searchedTodos.map(({ text, complete }) => (
                <TodoItem
                  key={text}
                  text={text}
                  completed={complete}
                  completeTodos={value.completeTodos}
                  deletedTodo={value.deletedTodo}
                />
              ))}
            </TodoList>
          )}
        </TodoContext.Consumer>
      </section>
      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} addTodos={addTodos} />
        </Modal>
      )}
    </React.Fragment>
  );
};
