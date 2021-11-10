import express from 'express';
import CountryRouter from './countries/index'
import UserRouter from './userRoute/index'
import ProductRouter from './product/index'
import CartRouter from './cart/index'
import StoreRouter from './stores/index'
import { rateLimiterMiddleware } from '../middlewares/requestLimit'

const Router = express.Router();
// Router.use('/auth', AuthRouter);
// Router.use('/countries', CountryRouter);
Router.use('/country', rateLimiterMiddleware, CountryRouter);
Router.use('/user', UserRouter);
Router.use('/products', ProductRouter);
Router.use('/stores', StoreRouter);
Router.use('/cart', CartRouter);
// Router.use('/login', UserRouter);


export default Router;