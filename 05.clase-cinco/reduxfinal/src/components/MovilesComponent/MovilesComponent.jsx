import React, {useState} from 'react'
import { getAllMoviles } from '../../core/services/movilesFetch'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loadMoviles, selectMovil } from './MovilesComponentActions'

const MovilesComponent = () => {

    const [usersListAux, setUsersListAux] = useState(undefined)
    const dispatch = useDispatch()

    const moviles = useSelector((state) => state.movilesComponentReducer.moviles)
    const movilSelected = useSelector((state) => state.movilesComponentReducer.movilSelected)
    const users = useSelector((state) => state.usuariosComponentReducer.users)

    const load = () => {
        const aux = getAllMoviles()
        //Setear en el reducer
        dispatch(loadMoviles(aux))
    }

    const selectMovilHanlder = (movil) => {
        dispatch(selectMovil(movil))
        getUsersByMobile(movil.id)
    }

    const getUsersByMobile = (idMobile) => {
        const aux = users.filter(u => u.mobile == idMobile)
        setUsersListAux(aux)
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
                <div>
                    <h4>Usuarios que utilizan este móvil:</h4>
                    {
                        !usersListAux || usersListAux.length <= 0 
                            ? (<span>No hay usuarios</span>)
                            : (
                                usersListAux.map((u,idx) => (
                                    <div key={idx}>
                                        <span>{u.username}</span>
                                    </div>
                                ))
                            )
                    }
                </div>
            )
        }
    </div>
  )
}

export default MovilesComponent