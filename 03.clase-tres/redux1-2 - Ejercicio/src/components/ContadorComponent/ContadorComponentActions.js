//Definiciones de las acciones
//Estos son los encargados de definir que acciones puedo ejecutar, no lo que harán en el estado, pero si como se llamarán.

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const MULTIPLY = "MULTIPLY"
export const MODIFY_NAME = 'MODIFY_NAME'
export const MODIFY_AUTHOR = "MODIFY_AUTHOR"

// Creadores/ejecutores de las acciones
//El objetivo de estas funciones es devolver un objeto con un type y un payload que será entendido e interpretado por redux
export const incrementCount = (nuevoValorCount) => {
    return {
        type: INCREMENT,
        payload: {
            nuevoValorCount
        }
    }
}

export const decrementCount = (nuevoValorCount) => {
    return {
        type: DECREMENT,
        payload: {
            nuevoValorCount
        }
    }
}

export const multiplyCount = (nuevoValorCount) => {
    return {
        type: MULTIPLY,
        payload: {
            nuevoValorCount
        }
    }
}

export const modifyName = (newName) => {
    return {
        type: MODIFY_NAME,
        payload: {
            newName
        }
    }
}

export const modifyAuthor = (newAuthor) => {
    return {
        type: MODIFY_AUTHOR,
        payload: {
            newAuthor
        }
    }
}

// export const load = () => {
//     return {
//         type: LOAD
//     }
// }