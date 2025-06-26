import React, { useContext, useState } from 'react'
import Context from '../core/context/Context'

const RegistrarUsuarioComponent = () => {

    const {
        addUser,
        backHome
    } = useContext(Context)
    const [userForm, setUserForm] = useState({})

    const userFormHandler = (propName, propValue) => {
        setUserForm({
            ...userForm,
            [propName]: propValue
        })
    }

    const check = () => {
        if(userForm.username.length <= 0){
            return false
        }else{
            return true
        }
    }

    const registerUser = () => {
        const checkAux = check()
        if(checkAux) {
            addUser(userForm)
            backHome()
        }
    }

  return (
    <div>
        <h1>Registrar usuario</h1>
        <hr />
        <div>
            <div>
                <span>Username: </span>
                <input type="text" onChange={(e) => userFormHandler('username', e.target.value)}/>
            </div>
            <div>
                <span>Password: </span>
                <input type="text" onChange={(e) => userFormHandler('password', e.target.value)}/>
            </div>
            <div>
                <span>email: </span>
                <input type="text" onChange={(e) => userFormHandler('email', e.target.value)}/>
            </div>
            <div>
                <span>name: </span>
                <input type="text" onChange={(e) => userFormHandler('name', e.target.value)}/>
            </div>
            <div>
                <button onClick={registerUser}>Registrar</button>
            </div>
        </div>
        <button onClick={backHome} style={{marginTop: 50}}>Volver</button>
    </div>
  )
}

export default RegistrarUsuarioComponent