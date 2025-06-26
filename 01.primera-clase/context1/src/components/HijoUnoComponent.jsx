import React from 'react'
import NietoUnoComponent from './NietoUnoComponent'

const HijoUnoComponent = (props) => {
  const {
    username
  } = props
  return (
    <div>
      HijoUnoComponent
      <hr />
      <NietoUnoComponent username={username}/>
    </div>
  )
}

export default HijoUnoComponent