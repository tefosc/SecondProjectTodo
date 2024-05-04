import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Data } from "../Utils/Data";
const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState(Data);
  const [valueSearch, setValueSearch] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalValue, setModalValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.checked === true).length;

  function onUpdate(id) {
    // newTodos[id].checked = !newTodos[id].checked;
    // setTodos(newTodos);
    const updateChecked = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updateChecked);
  }

  function deleteTodo(id) {
    const newTodos = [...todos];
    const filtroTodos = newTodos.filter((todo) => todo.id !== id);
    setTodos(filtroTodos);
  }

  useEffect(() => {
    const searchTodos = Data.filter((todo) =>
      todo.task.toLocaleLowerCase().includes(valueSearch)
    );
    setTodos(searchTodos);
  }, [valueSearch]);

  function onToggleModal() {
    setModalValue("");
    return setIsOpenModal((prevValue) => !prevValue);
  }

  function onAddTodo() {
    const newTodos = [...todos];
    newTodos.push({
      task: modalValue,
      checked: false,
      id: newTodos.length,
    });
    setTodos(newTodos);
    console.log("valor de modal value", modalValue);
    console.log("valor del newTodos", newTodos);
    setModalValue("");
  }
  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos: todos.length,
        todos,
        onUpdate,
        deleteTodo,
        valueSearch,
        setValueSearch,
        onToggleModal,
        isOpenModal,
        modalValue,
        setModalValue,
        onAddTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
