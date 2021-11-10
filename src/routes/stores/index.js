import express from 'express';
import { createStore } from '../../controllers/store/createStore'
import { deleteStore } from '../../controllers/store/deleteStore'
import { getSingleStore } from '../../controllers/store/getStore';
import { getStores } from '../../controllers/store/getStores'
import { protect } from "../../middlewares/authentication/auth"

const StoreRouter = express.Router();


StoreRouter.get('/store/:id', getSingleStore);
StoreRouter.use(protect)
StoreRouter.get('/stores', getStores);
StoreRouter.post('/create', createStore);
StoreRouter.delete('/delete/:id', deleteStore);

export default StoreRouter