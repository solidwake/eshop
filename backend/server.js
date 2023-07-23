import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/data/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))