import axios from 'axios';
import Product from '../../models/Product'

export const deleteProduct = async (req, res, next) => {

    if(!req.params.id) return res.status(500).send("Invalid query parameters")

    const { id } = req.params;

    try {

        const product = await Product.deleteOne({_id: id})

        if(!product) return res.status(401).send("Product not found")

        return res.status(200).json({
            product,
            message: "Product deleted successfully"
        })
    } catch (e) {
        console.log(e)
    }

}