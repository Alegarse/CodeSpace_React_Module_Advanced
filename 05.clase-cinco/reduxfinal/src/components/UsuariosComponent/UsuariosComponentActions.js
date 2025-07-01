
//Definidores de accion 

export const LOAD_USERS = 'LOAD_USERS'

//Creadores o ejecutores de acción

//Payload: object() => Con la información que se quiera enviar al reducer
export const loadUsersAction = (payload) => {
    return {
        type: LOAD_USERS,
        payload
    }
}