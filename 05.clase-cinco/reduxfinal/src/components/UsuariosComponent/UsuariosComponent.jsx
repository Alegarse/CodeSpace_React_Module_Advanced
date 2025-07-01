import React, {useEffect} from 'react'
import { getAllUsers } from '../../core/services/usersFetch'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsersAction } from './UsuariosComponentActions'

const UsuariosComponent = () => {

    const dispatch = useDispatch()

    const users = useSelector((state) => state.usuariosComponentReducer.users)
    const moviles = useSelector( (state) => state.movilesComponentReducer.moviles)

    const load = () => {
        const aux = getAllUsers()
        //OJO que pusimos el payload como objeto en el parámetro del creador de acción y por ello, debe ser un objeto como tal
        dispatch(
            loadUsersAction(
                {
                    users: aux
                }
            )
        )
    }

    const getMobileNameById = (idMobile) => {
        const aux = moviles.find(m => m.id == idMobile)
        if(aux){
            return `${aux.brand} ${aux.model}` //String
        }else{
            return 'No tiene móvil'
        }
    }


    useEffect(() => {
        load()
    },[])

  return (
    <div>
        <h1>Listado de usuarios</h1>
        <div>
            {
                !users 
                    ? (<span>Loading...</span>)
                    : users.length <= 0 
                        ? (<span>No hay usuarios</span>)
                        : (
                            users.map((u, idx) => (
                                <div key={idx}>
                                    <span>{u.username}</span>
                                    <span> - </span>
                                    <span> Movil que utiliza: {getMobileNameById(u.mobile)}</span>
                                </div>
                            ))
                        )
            }
        </div>
    </div>
  )
}

export default UsuariosComponent