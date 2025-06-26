import './App.css'
import GlobalState from './core/context/GlobalState'
import HomePage from './components/HomePage'

function App() {

  return (
    <GlobalState>
      <HomePage/>
    </GlobalState>
  )
}

export default App
