import { combineReducers } from "redux";
import movilesComponentReducer from "../../../components/MovilesComponent/MovilesComponentReducer";
import usuariosComponentReducer from "../../../components/UsuariosComponent/UsuariosComponentReducer";

const reducer = combineReducers({
    movilesComponentReducer,
    usuariosComponentReducer
})

export default reducer