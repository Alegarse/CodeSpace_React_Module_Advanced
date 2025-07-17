//Mi base de datos mockeada
let users = [
    {
        id: 1,
        name: 'Cristian',
        username: 'cristiaanromero',
        password: '1234567890',
    }
]

exports.getUserInfo = async (userId) => {
    const userAux = users.find(u => u.id == userId)

    return userAux
}

exports.doLogin = async (username, password) => {
    const userAux = users.find(u => u.username == username && u.password == password)

    return userAux
}

exports.addProductToCart = async (userId, productId) => {
    const userAux = users.find(u => u.id == userId)

    if (userAux.cart) {
        userAux.cart.push({
            productId
        })
    } else {
        userAux.cart = [
            {
                productId
            }
        ]
    }

    const userListAux = users.filter(u => u.id != userId)
    userListAux.push(userAux)

    users = userListAux

    return userAux
}

exports.createUserInfo = async (newUser) => {
    const userAux = {
        id: Math.random().toFixed(5) * 10000,
        ...newUser
    }

    users.push({
        ...userAux
    })

    return userAux
}