import './App.css'
import HomeComponent from './components/HomeComponent'
import GlobalState from './core/context/GlobalState'

function App() {

  return (
    <GlobalState>
      <HomeComponent/>
    </GlobalState>
  )
}

export default App
