import PropTypes from "prop-types";
export function TodoList(props) {
  return (
    <ul className="flex flex-col gap-2 mt-8 list-none">{props.children}</ul>
  );
}
TodoList.propTypes = {
  children: PropTypes.node.isRequired,
};
