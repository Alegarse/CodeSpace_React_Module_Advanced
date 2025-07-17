const express = require('express')
const { getUserController, loginUsercontroller, addProductUserController, createUserController } = require('../controllers/userController')


const router = express.Router()


router.post('/', loginUsercontroller)
router.get('/:id', getUserController)
router.put('/addProduct', addProductUserController)
router.post('/register', createUserController)

module.exports = router