import React, { useState } from 'react'
import { createUser, doLoginBack } from '../../core/services/userFetch'
import { useDispatch, useSelector } from 'react-redux'
import { doLoginActions } from './LoginPageActions'
import HomePage from '../HomePage/HomePage'

const LoginPage = () => {

    const [loginInfo, setLoginInfo] = useState({})
    const [isLogin, setIsLogin] = useState(true)
    const [registerInfo, setRegisterInfo] = useState({})

    const user = useSelector((state) => state.loginPageReducer.user)

    const dispatch = useDispatch()

    const handlerLoginInfo = (propName, propValue) => {
        setLoginInfo({
            ...loginInfo,
            [propName]: propValue
        })
    }
    const handlerRegisterInfo = (propName, propValue) => {
        setRegisterInfo({
            ...registerInfo,
            [propName]: propValue
        })
    }

    const doLogin = async () => {
        //Este es el encargado de hacer una petición al back
        const res = await doLoginBack(loginInfo)
        console.log('res',res)
        dispatch(
            doLoginActions(
                {
                    user: res.user
                }
            )
        )
    }

    const doRegister = async () =>{ 
        const res = await createUser(registerInfo)
        console.log('res',res);
        
        dispatch(
            doLoginActions(
                {
                    user: res
                }
            )
        )
    }


  return (
    <>
        {
            !user 
                ? isLogin ?(
                    <div>
                        <h1>My Store</h1>
                        <h2>Login</h2>
                        <div>
                            <div>
                                <span>Username</span>
                                <input type="text" onChange={(e) => handlerLoginInfo('username', e.target.value)}/>
                            </div>
                            <div>
                                <span>Password</span>
                                <input type="text" onChange={(e) => handlerLoginInfo('password', e.target.value)} />
                            </div>
                            <div>
                                <button onClick={doLogin}>Iniciar Sesión</button>
                            </div>
                            <hr />
                            <div>
                                <button onClick={() => setIsLogin(false)}>Quiero registrarme</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h1>My Store</h1>
                        <h2>Register</h2>
                        <div>
                            <div>
                                <span>Nombre</span>
                                <input type="text" onChange={(e) => handlerRegisterInfo('nombre', e.target.value)}/>
                            </div>
                            <div>
                                <span>Username</span>
                                <input type="text" onChange={(e) => handlerRegisterInfo('username', e.target.value)}/>
                            </div>
                            <div>
                                <span>Password</span>
                                <input type="text" onChange={(e) => handlerRegisterInfo('password', e.target.value)} />
                            </div>
                            <div>
                                <button onClick={doRegister}>Registrarme</button>
                            </div>
                        </div>
                    </div>
                ) 
            : (
                <HomePage />
            )
        }
    </>
  )
}

export default LoginPage