import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleSum = (e) => {
    setCounter(counter + 1);
  };
  const handleSubtract = (e) => {
    setCounter(counter - 1);
  };

  const handleReset = (e) => {
    setCounter(value);
  };

  return (
    <>
      <h1>I am the component CounterApp </h1>
      <h2> {counter} </h2>
      <button onClick={handleSum}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 32,
};
