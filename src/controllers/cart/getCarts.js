import axios from 'axios';
import Cart from '../../models/cart'

export const getCarts = async (req, res, next) => {

    try {

        const carts = await Cart.find({})

        if(!carts) return res.status(401).send("Carts not found")

        return res.status(200).json({
            carts
        })
    } catch (e) {
        console.log(e)
    }

}