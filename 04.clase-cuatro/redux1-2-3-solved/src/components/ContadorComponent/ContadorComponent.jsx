import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount, modifyName, modifyOwnerName, multiplyCount } from './ContadorComponentActions'

const ContadorComponent = () => {
//   const [count, setCount] = useState(0)
    const [name, setName ] = useState(undefined)
    const [ownerNameAux, setOnwerNameAux] = useState(undefined)

    const dispatch = useDispatch()

// useSelector es un hook que me permite traerme el estado que necesite de redux
    const count = useSelector( (state) => state.contadorComponentReducer.count)
    const countName = useSelector( (state) => state.contadorComponentReducer.countName)
    const ownerName = useSelector((state) => state.contadorComponentReducer.ownerName)
    // const {
    //       count,
    //       isLoading,
    //       countName
    // } = useSelector( (state) => state.contadorComponentReducer)
  /* 
    Acciones: 
        INCREMENT => Va a incrementar en uno el contador
        DECREMENT => Va a decrementar en uno el contador
  */

    const lanzarAccionIncrement = () => {
        dispatch(incrementCount(count + 1))
    }

    const lanzarDecrement = () => {
      dispatch(decrementCount(count - 1))
    }

    const lanzarCambioDeNombre = () => {
        //TODO: fkeofkseofkeo
        dispatch(modifyName(name))
    }

    const lanzarCambioNombreDelOnwer = () => {
      dispatch(modifyOwnerName(ownerNameAux))
    }

    const lanzarMultiplicar = () => {
      //TODO
      dispatch(multiplyCount(count === 0 ? 1 : count *2))
    }

  return (
    <div>
        <h1>Esto está hecho {ownerName}</h1>
        <h2>{countName} is {count}</h2>
        <button onClick={lanzarAccionIncrement}>
          Incrementar
        </button>
        <button onClick={lanzarDecrement}>
          Decrementar
        </button>
        <button onClick={lanzarMultiplicar}>
          Multiplicar
        </button>
        <hr />
        <div>
          <span>Nombre contador: </span>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
          <button onClick={lanzarCambioDeNombre}>Guardar Nombre</button>
        </div>
        <div>
          <span>Mi nombre: </span>
          <input type="text" onChange={(e) => setOnwerNameAux(e.target.value)}/>
          <button onClick={lanzarCambioNombreDelOnwer}>Guardar Nombre</button>
        </div>
    </div>
  )
}

export default ContadorComponent