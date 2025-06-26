import { useState } from 'react'
import './App.css'
import HijoUnoComponent from './components/HijoUnoComponent'
import GlobalState from './core/context/GlobalState'

function App() {
  const [username, setUsername] = useState('Nombre por defecto')

  return (
    <GlobalState>
      <HijoUnoComponent username={username}/>
    </GlobalState>
  )
}

export default App
