import express from 'express';
import { createProduct } from "../../controllers/product/createProduct"
import { deleteProduct } from "../../controllers/product/deleteProduct"
import { getProduct } from "../../controllers/product/getProduct"
import { getProducts } from "../../controllers/product/getProducts"
import { protect } from "../../middlewares/authentication/auth"

const ProductRouter = express.Router();
ProductRouter.get('/product/:id', getProduct)
ProductRouter.get('/products', getProducts)

ProductRouter.use(protect)
ProductRouter.delete('/delete/:id', deleteProduct)
ProductRouter.post('/create', createProduct)


export default ProductRouter;