import PropTypes from "prop-types";
export function TodoSearch({ value, updateValue }) {
  return (
    <input
      value={value}
      onChange={(e) => updateValue(e.target.value)}
      className="rounded-2x border border-black w-3/4 mx-auto grid place-items-center p-1"
      placeholder="Comprar arroz para la cena"
    />
  );
}

TodoSearch.propTypes = {
  value: PropTypes.string,
  updateValue: PropTypes.func,
};
