import express from 'express';
import { addToCart } from '../../controllers/cart/addToCart'
import { deleteCart } from '../../controllers/cart/deleteCartItem'
import { getCart } from '../../controllers/cart/getCart'
import { getCarts } from '../../controllers/cart/getCarts'
import { protect } from "../../middlewares/authentication/auth"

const CartRouter = express.Router()

CartRouter.use(protect)
CartRouter.get('/:userId', getCart)
CartRouter.delete('/delete/:userId', deleteCart)
CartRouter.get('/carts', getCarts)
CartRouter.get('/addtocart', addToCart)

export default CartRouter