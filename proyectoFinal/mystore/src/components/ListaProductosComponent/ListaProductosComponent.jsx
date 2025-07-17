import React, { useEffect } from 'react'
import { getProducts } from '../../core/services/productFetch'
import { useDispatch, useSelector } from 'react-redux'
import { loadProductsActions } from './ListaProductosAction'
import { addProductToCart } from '../../core/services/userFetch'
import { loadInfoActions } from '../../pages/LoginPage/LoginPageActions'

const ListaProductosComponent = () => {

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.listaProductosReducer.products)
  const user = useSelector((state) => state.loginPageReducer.user)

  const loadProducts = async () => {
    const aux = await getProducts()
    dispatch(
      loadProductsActions(
        {
          products: aux.products
        }
      )
    )
  }

  const addToCart = async (productId) => {
    const res = await addProductToCart(user.id, productId)

    dispatch(
      loadInfoActions(
        {
          //IMPORTANTE lo del formato
          user: res.user
        }
      )
    )
  }

  useEffect(() => {
    loadProducts()
  },[])

  return (
    <div>
      <h2>Lista de productos</h2>
      {
        !productList 
          ? (<div>Loading...</div>)
          : (
            productList.map((p,idx) => (
              <div key={idx} style={{display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'space-between'}}>
                <div>
                  <img style={{width: 150, height: 150}} src={p.imagen_url} alt="" />
                </div>
                <div>{p.nombre}</div>
                <div>{p.descripcion}</div>
                <div>{p.precio}</div>
                <div>
                  <button onClick={() => addToCart(p.id)}>Añadir al carrito</button>
                </div>
              </div>
            ))
          )
      }
    </div>
  )
}

export default ListaProductosComponent