import React, { createContext } from 'react'

const Context = createContext({
    users: [],
    state: "REG",
    userLogged: []
})

export default Context