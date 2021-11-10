import axios from 'axios';
import Cart from '../../models/cart'

export const deleteCart = async (req, res, next) => {

    if(!req.params) return res.status(401).send("Invalid Query Params")

    const { userId } = req.query.userId;
    try {

        const cart = await Cart.deleteOne({userId: userId})

        if(!cart) return res.status(401).send("Carts not found")

        return res.status(200).json({
            cart
        })
    } catch (e) {
        console.log(e)
    }

}