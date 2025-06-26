import React, { useState } from 'react'
import Context from './Context'

const TU_NOMBRE = 'MARINA'//Asi es como se pondrían las constantes
const GlobalState = ({children}) => {

    const [users, setUsers] = useState([])
    const [userLogged, setUserLogged] = useState(undefined)
    const [optionSelected, setOptionSelected] = useState('NO_SELECTED') // 'NO_SELECTED' | 'INICIAR_SESION' | 'REGISTRAR' | 'DETALLE'

    const addUser = (newUser) => {
        const aux = [...users]
        aux.push(newUser)
        setUsers(aux)
    }

    const getUserByUsernameAndPassword = (username, password) => {
        const userRes = users.find( u => u.username == username && u.password == password)
        return userRes
    }

    const backHome = () => {
        setOptionSelected('NO_SELECTED')
    }

  return (
    <Context.Provider value={{
        users,
        addUser,
        getUserByUsernameAndPassword,
        userLogged,
        setUserLogged,
        optionSelected,
        setOptionSelected,
        backHome
    }}>
        {children}
    </Context.Provider>
  )
}

export default GlobalState