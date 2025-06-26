import React, { useContext } from 'react'
import Context from '../core/context/Context';

const InfoProfileComponent = () => {

  const { userLogged, setState, setUserLogged } = useContext(Context);

const logoutUser = () => {
  setState("REG")
  setUserLogged(undefined)

}

  return (
    <div className='first-container'>
      <h3>Información del usuario logeado</h3>
      <div className="input-container">
        <span>Nombre: {userLogged.nombre}</span>
      </div>
      <div className="input-container">
        <span>Email: {userLogged.email}</span>
      </div>
      <div className="input-container">
        <span>Username: {userLogged.username}</span>
      </div>
      <button className='btn-logout' onClick={logoutUser}>Cerrar sesión</button>
    </div>
  )
}

export default InfoProfileComponent