import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { useTodos } from "./useTodos";
import { Modal } from "./components/Modal";
import { TodoForm } from "./components/TodoForm";
import { SectionApp } from "./components/SectionApp";
import { TodosError } from "./components/TodosError";
import { TodosLoading } from "./components/TodosLoading";
import { EmptyTodos } from "./components/EmptyTodos";
import { EmptySearch } from "./components/EmptySearch";
import { ChangeAlertWithStorageListener } from "./components/ChangeAlert";
import "./styles/App.css";

function App() {
  const {
    error,
    loading,
    sincronized,
    searchedTodos,
    openModal,
    setOpenModal,
    addTodos,
    completeTodos,
    completedTodos,
    deletedTodo,
    totalTodos,
    searchValue,
    setSearchValue,
  } = useTodos();

  return (
    <React.Fragment>
      <SectionApp
        classData={"todo search-section glassmorphism-effect"}
        render={() => (
          <>
            <TodoCounter
              completeTodos={completedTodos}
              totalTodos={totalTodos}
              loading={loading}
            />
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              loading={loading}
            />
          </>
        )}
      />
      <SectionApp
        classData={"todo list-section glassmorphism-effect"}
        render={() => (
          <TodoList
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            totalTodos={totalTodos}
            searchValue={searchValue}
            onError={() => <TodosError />}
            onLoading={() => <TodosLoading />}
            onEmptyTodos={() => <EmptyTodos />}
            onEmptySearch={(searchText) => (
              <EmptySearch searchText={searchText} />
            )}
            render={(todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.complete}
                onComplete={() => completeTodos(todo.text)}
                onDelete={() => deletedTodo(todo.text)}
              />
            )}
          />
        )}
      />
      {/*<TodoList>
          {error && <h2>Desespérate, hubo un error...</h2>}
          {loading && <h2>Esta cargando, no desesperes</h2>}
          {!loading && searchedTodos.length === 0 && (
            <h2>Agrega tu priner TODO</h2>
          )}

          {searchedTodos.map(({ text, complete }) => (
            <TodoItem
              key={text}
              text={text}
              completed={complete}
              completeTodos={completeTodos}
              deletedTodo={deletedTodo}
            />
          ))}
        </TodoList>*/}

      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} addTodos={addTodos} />
        </Modal>
      )}

      <ChangeAlertWithStorageListener sincronized={sincronized} />
    </React.Fragment>
  );
}

export default App;
