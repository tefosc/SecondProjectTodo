import PropTypes from "prop-types";
import { UnCheck } from "../Icons/UnCheck";
import { Check } from "../Icons/Check";
import { Delete } from "../Icons/Delete";

export function TodoItem({ task, check, onChange, onDelete }) {
  return (
    <li className="flex items-center  justify-around w-full h-12 ">
      <span className="Icon cursor-pointer" onClick={onChange}>
        {check ? <Check /> : <UnCheck />}
      </span>
      <p className="w-4/5 text-center">{task}</p>
      <span className={`Icon cursor-pointer `} onClick={onDelete}>
        <Delete />
      </span>
    </li>
  );
}

TodoItem.propTypes = {
  task: PropTypes.string.isRequired,
  check: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
