import { useEffect, useRef } from 'react';
import { useState } from 'react';

const useCounterTime = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);
  const [mode, setMode] = useState('ACTIVE');
  //const [intervalId, setIntervalId] = useState(undefined);
  const refInterval = useRef(undefined);

  const changeMode = () => {
    mode === 'ACTIVE' ? setMode('INACTIVE') : setMode('ACTIVE');
  };

  const initCounter = () => {
    //    if (!intervalId) {
    //      const idInterval = setInterval(() => setCounter((prev) => prev+1), 1000);
    //      setIntervalId(idInterval);
    //    }
    if (!refInterval.current) {
      refInterval.current = setInterval(
        () => setCounter((counter) => counter + 1),
        1000
      );
    }
  };

  useEffect(() => {
      if (!refInterval.current) {
      refInterval.current = setInterval(
        () => setCounter((counter) => counter + 1),
        1000
      );
    }
    }, []);

  const resetCounter = () => {
    setCounter(0);
    clearCounter();
    initCounter();
  };

  const clearCounter = () => {
    //    clearInterval(intervalId);
    //    setIntervalId(undefined);
    if (refInterval.current) {
      clearInterval(refInterval.current);
      refInterval.current = undefined;
    }
  };

  const pauseCounter = () => {
    clearCounter();
    changeMode();
  };

  const reanudateCounter = () => {
    initCounter();
    changeMode();
  };
  return {
    counter,
    mode,
    initCounter,
    pauseCounter,
    resetCounter,
    reanudateCounter,
  };
};

export default useCounterTime;
