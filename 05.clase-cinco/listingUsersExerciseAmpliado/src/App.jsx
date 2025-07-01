import "./App.css";
import { Provider } from "react-redux";
import store from "./core/redux/store/store";
import MobileComponent from "./components/MobileComponent/MobileComponent";
import UserComponent from "./components/UserComponent/UserComponent";

function App() {
  return (
    <Provider store={store}>
      <MobileComponent />
      <UserComponent/>
    </Provider>
  );
}

export default App;
