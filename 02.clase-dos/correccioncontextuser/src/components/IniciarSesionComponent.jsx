import React, { useContext, useState } from 'react'
import Context from '../core/context/Context'

const IniciarSesionComponent = () => {

    const {
        getUserByUsernameAndPassword,
        setUserLogged,
        backHome,
        setOptionSelected
    } = useContext(Context)
    const [userToLogin, setUserToLogin] = useState({})
    const [errorMessage, setErrorMessage] = useState(undefined)

    const userToLoginHandler = (propName, propValue) => {
        setUserToLogin({
            ...userToLogin,
            [propName]: propValue
        })
    }

    const doLogin = () => {
        if(userToLogin.username && userToLogin.username != '' && userToLogin.password && userToLogin.password != ''){
            const userAux = getUserByUsernameAndPassword(userToLogin.username, userToLogin.password)
            if(userAux) {
                setUserLogged(userAux)
                setOptionSelected('DETALLE')
                setErrorMessage(undefined)
            }else{ 
                setErrorMessage('Las datos introducidos son incorrectos')
            }
        }
    }

  return (
    <div>
        <h1>Iniciar Sesión</h1>
        <hr />
        {
            errorMessage && (
                <div>
                    <span style={{color: 'red'}}>{errorMessage}</span>
                </div>
            )
        }
        <div>
            <div>
                <span>Username: </span>
                <input type="text" onChange={(e) => userToLoginHandler('username', e.target.value)} />
            </div>
            <div>
                <span>Password: </span>
                <input type="text"  onChange={(e) => userToLoginHandler('password', e.target.value)} />
            </div>
            <div>
                <button onClick={doLogin}>Iniciar sesión</button>
            </div>
        </div>
        <button onClick={backHome} style={{marginTop: 50}}>Volver</button>
        
    </div>
  )
}

export default IniciarSesionComponent