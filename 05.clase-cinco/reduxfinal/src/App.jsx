import './App.css'
import { Provider } from 'react-redux'
import store from './core/redux/store/store'
import MovilesComponent from './components/MovilesComponent/MovilesComponent'
import UsuariosComponent from './components/UsuariosComponent/UsuariosComponent'

function App() {

  return (
    <Provider store={store}>
      <MovilesComponent />
      <hr />
      <UsuariosComponent />
    </Provider>
  )
}

export default App
