import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle }) => {
  if (!title) {
    throw new Error("The title is null");
  }

  return (
    <>
      <h2 data-testid="test-title">{title}</h2>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  name: "Acevedo Adrian",
  subTitle: "Esto es un subtitulo",
  // title: "Esto es un Titulo",
};
