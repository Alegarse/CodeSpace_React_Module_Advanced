import React, { useState } from 'react'
import Context from './Context'

const GlobalState = ({children}) => {

    const [appName, setAppName] = useState('Nombre app')
    const [theme, setTheme] = useState('')

  return (
    <Context.Provider value={{
        appName,
        theme
    }}>
        {children}
    </Context.Provider>
  )
}

export default GlobalState