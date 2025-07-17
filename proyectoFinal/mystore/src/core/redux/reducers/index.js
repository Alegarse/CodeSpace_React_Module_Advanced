import { combineReducers } from "redux";
import loginPageReducer from "../../../pages/LoginPage/LoginPageReducer";
import menuReducer from "../../../components/MenuComponent/MenuComponentReducer";
import listaProductosReducer from "../../../components/ListaProductosComponent/ListaProductosReducer";

const reducer = combineReducers({
    loginPageReducer,
    menuReducer,
    listaProductosReducer
})

export default reducer