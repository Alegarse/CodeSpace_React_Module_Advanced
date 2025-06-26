import React, { useContext } from 'react'
import Context from '../core/context/Context'

const FirstChildComponent = () => {

    const { name } = useContext(Context)

  return (
    <div style={{color: "green"}}>Valor name desde el context: <b>{name}</b></div>
  )
}

export default FirstChildComponent