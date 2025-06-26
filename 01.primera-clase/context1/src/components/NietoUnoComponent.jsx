import React from 'react'
import BisNietoUnoComponent from './BisNietoUnoComponent'

const NietoUnoComponent = (props) => {
  const {
    username
  } = props
  return (
    <div>
      NietoUnoComponent
      <hr />
      <BisNietoUnoComponent username={username}/>
    </div>
  )
}

export default NietoUnoComponent