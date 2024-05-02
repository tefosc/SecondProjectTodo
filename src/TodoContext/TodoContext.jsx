import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Data } from "../Utils/Data";
const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState(Data);
  const [valueSearch, setValueSearch] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

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
    return setIsOpenModal((prevValue) => !prevValue);
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
