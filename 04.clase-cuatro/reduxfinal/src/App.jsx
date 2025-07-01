import './App.css'
import { Provider } from 'react-redux'
import store from './core/redux/store/store'
import MovilesComponent from './components/MovilesComponent/MovilesComponent'

function App() {

  return (
    <Provider store={store}>
      <MovilesComponent />
    </Provider>
  )
}

export default App
