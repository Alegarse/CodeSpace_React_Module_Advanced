import './App.css';
import useCounterTime from './core/hooks/useCounterTime';

function App() {
  const { counter, mode, pauseCounter, resetCounter, reanudateCounter } =
    useCounterTime();

  return (
    <div className="container">
      <h2>Ejercicio de hook - Contador automático</h2>
      <div className="contador-container">
        <p>{counter}</p>
      </div>
      <div className="buttons-container">
        <button className="btn-reset" onClick={resetCounter}>
          Reset
        </button>
        {mode === 'ACTIVE' ? (
          <button className="btn-pause" onClick={pauseCounter}>
            Pausar
          </button>
        ) : (
          <button className="btn-reanudate" onClick={reanudateCounter}>
            Reanudar
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
