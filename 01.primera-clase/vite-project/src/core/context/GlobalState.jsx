import React, { useState } from 'react'
import Context from './Context'

const GlobalState = ({children}) => {

    const [name, setName] = useState('Alejandro')
  return (
    <Context.Provider value = {{
        name
    }}>
        {children}
    </Context.Provider>
  )
}

export default GlobalState