import React from 'react'
import TataraNietoUnoComponent from './TataraNietoUnoComponent'

const BisNietoUnoComponent = (props) => {
  const {
    username
  } = props
  return (
    <div>
      BisNietoUnoComponent
      <hr />
      <TataraNietoUnoComponent username={username}/>
    </div>
  )
}

export default BisNietoUnoComponent