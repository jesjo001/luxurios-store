import axios from 'axios';
import Product from '../../models/Product'

export const getProducts = async (req, res, next) => {

    try {

        const products = await Product.find({})

        if(!products) return res.status(401).send("Product not found")

        return res.status(200).json({
            products
        })
    } catch (e) {
        console.log(e)
    }

}