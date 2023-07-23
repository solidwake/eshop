import express from 'express'
const router = express.Router()
import { getProducts, getProductById } from '../controllers/productCotroller.js'

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router

