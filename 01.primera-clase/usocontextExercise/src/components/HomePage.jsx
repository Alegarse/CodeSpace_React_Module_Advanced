import React, { useContext } from 'react'
import RegisterComponent from './RegisterComponent'
import LoginComponent from './LoginComponent'
import InfoProfileComponent from './InfoProfileComponent'
import Context from '../core/context/Context'

const HomePage = () => {

    const { state } = useContext(Context)

  return (

    <div>
        <h1>Práctica de Context</h1>
        {
            state === "REG" || !state ? (
                <RegisterComponent/>
            ) : state === "LOGIN" ? (
                <LoginComponent/>
            ) : state === "INFO" ? (
                <InfoProfileComponent/>
            ) : null
        }
    </div>
  )
}

export default HomePage