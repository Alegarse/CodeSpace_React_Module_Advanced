import React, { useContext } from 'react'
import Context from '../core/context/Context'

const DetalleUsuarioComponent = () => {

  const {
    userLogged,
    backHome
  } = useContext(Context)
  return (
    <div>
      <h1>Detalle de un usuario</h1>
      <hr />
        {
          userLogged && (
            <div>
              <div>
                <span>Name: {userLogged.name}</span>
              </div>
              <div>
                <span>Username: {userLogged.username}</span>
              </div>
              <div>
                <span>Password: {userLogged.password}</span>
              </div>
              <div>
                <span>Email: {userLogged.email}</span>
              </div>
            </div>
          )
        }
      <hr />
      <button onClick={backHome}>Volver</button>
    </div>
  )
}

export default DetalleUsuarioComponent