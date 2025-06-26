//Estado inicial del reducer.(Acordaos que el reducer es una porción el destado global hecho con redux)

import { DECREMENT, INCREMENT, MODIFY_NAME } from "./ContadorComponentActions"

const initialState = {
    count: 0,
    isLoading: false,
    countName: undefined
}


//Las funciones de modificación del estado del reducer que serán ejecutadas por redux cuando se llame a la acción correspondiente

//Recibe por parámetros el estado actual del reducer(de la porción de código correspondiente a este reducer) y la acción que se ejecutó desde algún lugar. Si la acción corresponde a alguna de las acciones dentro del switch, entonces se ejecutar lo que haya dentro del switch, en otro caso, no hará nada y pasará de largo.
const contadorComponentReducer = (state = initialState, action) => {

    switch (action.type) {
        // case LOAD: 
        //     return {
        //         ...state,
        //         isLoading: true
        //     }
        case INCREMENT:
            return {
                ...state,
                count: action.payload.nuevoValorCount
            }
        case DECREMENT:
            return {
                ...state,
                count: action.payload.nuevoValorCount
            }
        case MODIFY_NAME:
            return {
                ...state,
                countName: action.payload.newName
            }
        default:
            return state
    }
}

export default contadorComponentReducer