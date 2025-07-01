
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useContador from './core/hooks/useContador'
import useToken from './core/hooks/useToken'

function App() {

  const {
    counter,
    increment,
    decrement
  } = useContador()

  const {
    getToken
  } = useToken()

  const token = getToken()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Token es: {token.token}</h2>
      <h3>Caducidad del token es: {token.cad}</h3>
      <div className="card">
        <p>count is {counter}</p>
        <button onClick={increment}>
          increment
        </button>
        <button onClick={decrement}>
          decrement
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
