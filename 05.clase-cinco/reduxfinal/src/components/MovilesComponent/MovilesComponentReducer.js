import { LOAD_MOVILES, SELECT_MOVIL } from "./MovilesComponentActions"


const initialState = {
    moviles: undefined,
    movilSelected: undefined
}

const movilesComponentReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MOVILES:
            return {
                ...state,
                moviles: action.payload.moviles
            }
        case SELECT_MOVIL:
            return {
                ...state,
                movilSelected: action.payload.movil
            }
        default:
            return state
    }
}

export default movilesComponentReducer