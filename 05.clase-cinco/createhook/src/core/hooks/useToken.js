import React, { useState, useEffect } from 'react'

const useToken = () => {

    //Variable de estado que contiene el token
    const [token, setToken] = useState({})

    //Función que me trae el token desde el back (en este caso simulado)
    const getTokenFromBackend = () => {
        //Debería hacer la petición al back....
        setToken({
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30',
            refreshToken: '',
            cad: Number(Math.random() * 1000).toFixed(0)
        })
    }

    //Función que me comprueba si el token está caducado y por tanto me lo tiene que refrescar
    const checkToken = () => {
        //
        let isCad = token?.cad % 2 === 0
        if (isCad) {
            console.log('Entra porque el cad es par');

            getTokenFromBackend()
        }
    }

    const getToken = () => {
        checkToken()
        return token
    }

    useEffect(() => {
        getTokenFromBackend()
    }, [])

    //IMPORTANTE: Que aunque no devuelva más de un elemento, siempre debemos devolverlo como objeto y no como algo solo
    return {
        getToken
    }


}

export default useToken