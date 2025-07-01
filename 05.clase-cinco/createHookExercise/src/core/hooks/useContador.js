import { useState } from 'react';

const useContador = (initualValue = 0) => {
  const [ counter, setCounter ] = useState(initualValue);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return {
    counter,
    increment,
    decrement,
  };
};

export default useContador;
