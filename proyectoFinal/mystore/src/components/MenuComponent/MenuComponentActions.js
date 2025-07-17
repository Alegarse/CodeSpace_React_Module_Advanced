//Definidores de accción

export const CHANGE_MENU_OPTION = 'CHANGE_MENU_OPTION'

//creadores de acción

export const changeMenuOptionActions = (payload) => {
    return {
        type: CHANGE_MENU_OPTION,
        payload
    }
}