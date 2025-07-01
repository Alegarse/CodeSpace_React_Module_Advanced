import { LOAD_USERS } from "./UsuariosComponentActions"


const initialState = {
    users: undefined
}

const usuariosComponentReducer = (state = initialState, action) => {

    const {
        type,
        payload
    } = action

    switch (type) {
        case LOAD_USERS:
            return {
                ...state,
                users: payload.users
            }
        //RECORDAD NO OLVIDAR EL DEFAULT
        default:
            return state
    }
}

export default usuariosComponentReducer