import PropTypes from "prop-types";
export function TodoModal({ onToggleModal }) {
  return (
    <div className="flex flex-col w-96 bg-black rounded-md p-3">
      <h3 className="text-center text-white">Ingresa tu nuevo Todo</h3>
      <input
        placeholder="Add new Todo Task"
        className="border-black bg-white text-black rounded-md mb-2 p-1"
      />
      <button
        className="border-white border-2 rounded-md p-1 w-auto text-black bg-white hover:border-white hover:bg-black hover:text-white"
        onClick={onToggleModal}
      >
        AGREGAR
      </button>
    </div>
  );
}

TodoModal.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
};
