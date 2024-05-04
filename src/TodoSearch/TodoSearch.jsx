import PropTypes from "prop-types";
export function TodoSearch({ onUpdateValueSearch, value, updateValue }) {
  const onChangeInputSearch = (e) => {
    onUpdateValueSearch();
    updateValue(e.target.value);
  };
  return (
    <input
      value={value.trim()}
      onChange={(e) => onChangeInputSearch(e)}
      className="rounded-2x border border-black w-3/4 mx-auto grid place-items-center p-1"
      placeholder="Comprar arroz para la cena"
    />
  );
}

TodoSearch.propTypes = {
  value: PropTypes.string,
  updateValue: PropTypes.func,
  onUpdateValueSearch: PropTypes.func,
};
