//Definiciones de las acciones
//Estos son los encargados de definir que acciones puedo ejecutar, no lo que harán en el estado, pero si como se llamarán.

export const INCREMENT = 'INCREMENT'

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

// export const load = () => {
//     return {
//         type: LOAD
//     }
// }