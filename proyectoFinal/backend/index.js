const express = require("express")
const cors = require("cors")
const userRouter = require('./src/routes/userRouter')
const healthyRouter = require('./src/routes/healthyRouter')
const productRouter = require('./src/routes/productRouter')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())

//Cargamos la rutas
app.use('/user', userRouter)
app.use('/healthy', healthyRouter)
app.use('/products', productRouter)


app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})