import axios from 'axios';
import Cart from '../../models//cart'

export const addToCart = async (req, res, next) => {

    if (!req.body) return res.status(500).send("Invalid query parameters")

    const {
        productName,
        price,
        productImage,
        isbn,
        amount,
        storeId,
        userId,
    } = req.body;

    if(!(productName && productImage && price && amount && isbn && storeId && userId))
    return res.status(402).send("productName, productImage, price, amount, storeId, userId are required fields")

    try {
        const exist = await Cart.exists({isbn})

        if(exist)return res.status("Cart with the same isbn already exists")

        const cart = await Cart.create({ 
            productName, price, productImage, 
            amount, isbn, storeId, userId
        })

        if (!cart) return res.status(401).send("Cart not found")

        return res.status(200).json({
            cart,
            message: "Item was added successfully"
        })
    } catch (e) {
        console.log(e)
    }

}