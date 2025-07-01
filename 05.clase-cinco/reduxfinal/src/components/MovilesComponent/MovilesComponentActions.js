
//Definidores de acción
export const LOAD_MOVILES = 'LOAD_MOVILES'
export const SELECT_MOVIL = 'SELECT_MOVIL'


//Creadores de acción

//payload en el parametro de la función va a ser un objeto que va a recibr X propiades.
// export const loadMoviles = (payload) => {
//     return {
//         type: LOAD_MOVILES,
//         payload
//     }
// }
export const loadMoviles = (moviles) => {
    return {
        type: LOAD_MOVILES,
        payload: {
            moviles
        }
    }
}

export const selectMovil = (movil) => {
    return {
        type: SELECT_MOVIL,
        payload: {
            movil
        }
    }
}