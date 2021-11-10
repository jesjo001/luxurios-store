import axios from 'axios';
import Store from '../../models/Store'

export const getStores = async (req, res, next) => {

    try {

        const stores = await Store.find({})

        if(!stores) return res.status(401).send("Store not found")

        return res.status(200).json({
            stores
        })
    } catch (e) {
        console.log(e)
    }

}