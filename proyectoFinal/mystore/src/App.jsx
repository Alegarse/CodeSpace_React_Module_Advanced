
import './App.css'
import store from './core/redux/store/store'
import LoginPage from './pages/LoginPage/LoginPage'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <LoginPage />
    </Provider>
  )
}

export default App
