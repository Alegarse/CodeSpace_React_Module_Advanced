import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCount } from './ContadorComponentActions'

const ContadorComponent = () => {
//   const [count, setCount] = useState(0)

    const dispatch = useDispatch()

// useSelector es un hook que me permite traerme el estado que necesite de redux
    const count = useSelector( (state) => state.contadorComponentReducer.count)

  /* 
    Acciones: 
        INCREMENT => Va a incrementar en uno el contador
        DECREMENT => Va a decrementar en uno el contador
  */

    const lanzarAccionIncrement = () => {
        dispatch(incrementCount(count + 1))
    }

  return (
    <div>
        <button onClick={lanzarAccionIncrement}>
          count is {count}
        </button>
    </div>
  )
}

export default ContadorComponent