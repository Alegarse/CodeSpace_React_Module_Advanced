

export const doLoginBack = async (loginInfo) => {
    const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
            'content-type': 'Application/json'
        },
        body: JSON.stringify(
            { username: loginInfo.username, password: loginInfo.password }
        )
    })
    const res = await response.json()

    return res
}

export const addProductToCart = async (userId, productId) => {
    const res = await fetch('http://localhost:3000/user/addProduct', {
        method: 'PUT',
        headers: {
            'content-type': 'Application/json'
        },
        body: JSON.stringify(
            {
                userId,
                productId
            }
        )
    })
    const result = await res.json()
    return result
}

export const createUser = async (newUser) => {
    const res = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: {
            'content-type': 'Application/json'
        },
        body: JSON.stringify(
            {
                newUser
            }
        )
    })
    const result = await res.json()
    return result.user
}