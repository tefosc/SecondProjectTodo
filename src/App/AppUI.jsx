import { useContext } from "react";
import { Title } from "../Title/Title";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import "../index.css";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoSearch } from "../TodoSearch/TodoSearch";
export function AppUi() {
  const {
    todos,
    totalTodos,
    completedTodos,
    onUpdate,
    deleteTodo,
    valueSearch,
    setValueSearch,
  } = useContext(TodoContext);

  return (
    <>
      <Title total={totalTodos} completed={completedTodos} />
      <TodoSearch value={valueSearch} updateValue={setValueSearch} />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            task={todo.task}
            check={todo.checked}
            onChange={() => onUpdate(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>
    </>
  );
}
