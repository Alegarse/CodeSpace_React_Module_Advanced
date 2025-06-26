import React, { useContext } from 'react'
import Context from '../core/context/Context'

const TataraNietoUnoComponent = (props) => {

  const {
    username
  } = props

  //El contexto siempre es un objeto, por ello siempre vamos a hacer el 'destructuring'
  const {
    appName,
    theme
  } = useContext(Context)

  return (
    <div>
      TataraNietoUnoComponent
      <hr />
      Aquí debe mostrarse el valor de la variable username de app.jsx {username}

      <hr />
      Valor appName desde el context: {appName}
      Valor theme desde el context: {theme}
    </div>
  )
}

export default TataraNietoUnoComponent