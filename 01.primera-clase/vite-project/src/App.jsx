import './App.css'
import FirstChildComponent from './components/FirstChildComponent'
import GlobalState from './core/context/GlobalState'

function App() {

  return (
    <GlobalState>
      <FirstChildComponent/>
    </GlobalState>
  )
}

export default App
