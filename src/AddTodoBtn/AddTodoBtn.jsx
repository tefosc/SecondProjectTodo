import PropTypes from "prop-types";
export function AddTodoBtn({ onToggleModal }) {
  return (
    <button
      className="border-black border-2 rounded-md p-1 bottom-0 right-0 h-15 w-15"
      onClick={onToggleModal}
    >
      Agregar Todo
    </button>
  );
}

AddTodoBtn.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
};
