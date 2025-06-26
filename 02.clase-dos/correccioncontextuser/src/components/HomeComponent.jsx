import React, { useContext, useState } from 'react'
import IniciarSesionComponent from './IniciarSesionComponent'
import RegistrarUsuarioComponent from './RegistrarUsuarioComponent'
import DetalleUsuarioComponent from './DetalleUsuarioComponent'
import Context from '../core/context/Context'

const HomeComponent = () => {

    const {
        optionSelected,
        setOptionSelected
    }= useContext(Context)

  return (
    <div>
        <h1>Aplicación usuarios Context</h1>
        <hr />
        {
            // users && users.map((u,idx) => (
            //     <div key={idx}>
            //         {u.username}
            //     </div>
            // ))
        }
        <hr />
        {
            optionSelected === 'INICIAR_SESION' ? (
                <IniciarSesionComponent/>
            ) : optionSelected === 'REGISTRAR' ? (
                <RegistrarUsuarioComponent />
            ) : optionSelected === 'DETALLE' ? (
                <DetalleUsuarioComponent />
            ) : (
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <button onClick={() => setOptionSelected('REGISTRAR')}>Registrar usuario</button>
                    <button onClick={() => setOptionSelected('INICIAR_SESION')}>Iniciar sesión</button>
                </div>
            )
        }

    </div>
  )
}

export default HomeComponent