import './App.css'
import { Provider } from 'react-redux'
import store from './core/redux/store/store'
import ContadorComponent from './components/ContadorComponent/ContadorComponent'

function App() {

  return (
    <Provider store={store}>
      <ContadorComponent />
    </Provider>
  )
}

export default App
