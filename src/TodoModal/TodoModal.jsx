import PropTypes from "prop-types";
export function TodoModal({
  onToggleModal,
  onAddTodo,
  modalValue,
  setModalValue,
}) {
  const onToggleAceptBtn = () => {
    onToggleModal();
    onAddTodo();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-75 absolute inset-0"></div>
      <div className="flex flex-col w-96 bg-black rounded-md p-3 relative z-10">
        <h3 className="text-center text-white">Ingresa tu nuevo Todo</h3>
        <input
          value={modalValue}
          onChange={(e) => setModalValue(e.target.value)}
          placeholder="Add new Todo Task"
          className="border-black bg-white text-black rounded-md mb-2 p-1"
        />
        <div className="flex flex-row justify-between gap-2">
          <button
            className="border-white border-2 rounded-md p-1  text-black bg-white hover:border-white hover:bg-black hover:text-white w-1/2"
            onClick={onToggleAceptBtn}
          >
            AGREGAR
          </button>
          <button
            className="border-white border-2 rounded-md p-1  text-black bg-white hover:border-white hover:bg-black hover:text-white w-1/2"
            onClick={onToggleModal}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

TodoModal.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  modalValue: PropTypes.string.isRequired,
  setModalValue: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
};
