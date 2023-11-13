import dotenv from 'dotenv'
import express from 'express'
import usersRoutes from './src/routes/usersRoutes.js'
import productosRoutes from './src/routes/productosRoutes.js'
import path from 'path'

dotenv.config()

const app = express()
const root = path.resolve()
const PORT = process.env.PORT || 8080

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', root + '/src/views')

app.use('/users', usersRoutes)
app.use('/productos', productosRoutes)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))



