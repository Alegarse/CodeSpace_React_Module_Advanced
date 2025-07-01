import React from 'react'
import { getAllMoviles } from '../../core/services/movilesFetch'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loadMoviles, selectMovil } from './MovilesComponentActions'

const MovilesComponent = () => {

    const dispatch = useDispatch()

    const moviles = useSelector((state) => state.movilesComponentReducer.moviles)
    const movilSelected = useSelector((state) => state.movilesComponentReducer.movilSelected)

    const load = () => {
        const aux = getAllMoviles()
        //Setear en el reducer
        dispatch(loadMoviles(aux))
    }

    const selectMovilHanlder = (movil) => {
        dispatch(selectMovil(movil))
    }

    useEffect(() => {
        load()
    },[])

  return (
    <div>
        {
            !moviles ? (
                <div>Cargando datos...</div>
            ) : moviles.length <= 0 ? (
                <div>No hay elementos</div>
            ) : (
                moviles.map((m, idx) => (
                    <div key={idx} style={{display: 'flex', gap: 50}}>
                        <span>{m.brand}</span>
                        <span>{m.model}</span>
                        <span>{m.year}</span>
                        <button onClick={() => selectMovilHanlder(m)}>Seleccionar</button>
                    </div>
                ))
            )
        }
        <hr />
        {
            !movilSelected ? (
                <div>No hay móvil seleccionado</div>
            ) : (
                <div>{JSON.stringify(movilSelected)}</div>
            )
        }
    </div>
  )
}

export default MovilesComponent