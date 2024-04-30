import PropTypes from "prop-types";

export function Title({ total, completed }) {
  return (
    <>
      <h1 className="text-5xl font-another text-center font-normal">
        Bienvenido a tu APP de Notas
      </h1>
      {total === 0 && (
        <h2 className="text-5xl font-another text-center font-normal pb-10">
          No tienes Todos Agrega uno para comenzar 🗒️📔
        </h2>
      )}
      {completed === total && total > 0 && (
        <h2 className="text-5xl font-another text-center font-normal pb-10">
          Completaste Todos los todos 🥳🎉🎉
        </h2>
      )}
      {completed !== total && (
        <h2 className="font-sans font-xl text-2xl pt-5 text-center font-bold pb-10">
          Has completado{" "}
          <span className="text-4xl font-another text-center font-normal ">
            {completed}
          </span>{" "}
          notas de{" "}
          <span className="text-4xl font-another text-center font-normal">
            {total}
          </span>
        </h2>
      )}
    </>
  );
}

Title.propTypes = {
  total: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
};
