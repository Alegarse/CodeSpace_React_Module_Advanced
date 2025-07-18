const { getUserInfo, doLogin, addProductToCart, createUserInfo } = require("../services/userService")


exports.getUserController = async (req, res) => {
    const userId = req.params.id
    console.log('userId: ', userId)

    const resUserInfo = await getUserInfo(userId)

    res.status(200).send({ user: resUserInfo })
}

exports.loginUsercontroller = async (req, res) => {
    try {
        console.log(' req.body', req.body);

        const username = req.body.username
        const password = req.body.password

        const resUserInfo = await doLogin(username, password)
        if (!resUserInfo) throw new Error('No existe el usuario')
        res.status(200).send({ user: resUserInfo })
    } catch (error) {
        res.sendStatus(500)
    }
}

exports.addProductUserController = async (req, res) => {
    const userId = req.body.userId
    const productId = req.body.productId

    const resUserInfo = await addProductToCart(userId, productId)

    res.status(200).send({ user: resUserInfo })
}

exports.createUserController = async (req, res) => {
    const newUser = req.body.newUser

    const resUserInfo = await createUserInfo(newUser)

    res.status(200).send({ user: resUserInfo })
}