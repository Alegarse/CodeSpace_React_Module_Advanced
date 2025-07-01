import React, { useState } from 'react'

//Un hook normalmente suele devolver varios elementos.
const useContador = (initalValue = 0) => {

    const [counter, setCounter] = useState(initalValue)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return {
        counter,
        increment,
        decrement
    }

}

export default useContador