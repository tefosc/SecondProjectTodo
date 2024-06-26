import { useContext } from "react";
import { Title } from "../Title/Title";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import "../index.css";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoModal } from "../TodoModal/TodoModal";
import { AddTodoBtn } from "../AddTodoBtn/AddTodoBtn";
export function AppUi() {
  const {
    totalTodos,
    completedTodos,
    onUpdate,
    deleteTodo,
    valueSearch,
    setValueSearch,
    onToggleModal,
    isOpenModal,
    modalValue,
    setModalValue,
    onAddTodo,
    onUpdateValueSearch,
    todosFiltrados,
  } = useContext(TodoContext);

  return (
    <>
      <Title total={totalTodos} completed={completedTodos} />
      <TodoSearch
        value={valueSearch}
        updateValue={setValueSearch}
        onUpdateValueSearch={onUpdateValueSearch}
      />
      <TodoList>
        {todosFiltrados.map((todo) => (
          <TodoItem
            key={todo.id}
            task={todo.task}
            check={todo.checked}
            onChange={() => onUpdate(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
        <AddTodoBtn onToggleModal={onToggleModal} />
      </TodoList>
      {isOpenModal && (
        <TodoModal
          onToggleModal={onToggleModal}
          onAddTodo={onAddTodo}
          modalValue={modalValue}
          setModalValue={setModalValue}
        />
      )}
    </>
  );
}
