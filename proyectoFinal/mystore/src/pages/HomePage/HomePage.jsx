import React from 'react'
import MenuComponent from '../../components/MenuComponent/MenuComponent'
import { useSelector } from 'react-redux'
import ListaProductosComponent from '../../components/ListaProductosComponent/ListaProductosComponent'
import MyCarritoComponent from '../../components/MyCarritoComponent/MyCarritoComponent'

const HomePage = () => {

    const menuOption = useSelector((state) => state.menuReducer.menuOption)

  return (
    <div>
        <h1>My store</h1>
        <hr />
        <MenuComponent />
        <hr />
        {
            menuOption !== 0 ? (
                <MyCarritoComponent />
            ) : (
                <ListaProductosComponent />
            )
        }
    </div>
  )
}

export default HomePage