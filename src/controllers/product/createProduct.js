import axios from 'axios';
import Product from '../../models/Product'

export const createProduct = async (req, res, next) => {

    if (!req.body) return res.status(500).send("Invalid query parameters")

    const {
        name,
        price,
        weight,
        dimensions,
        amount,
        image,
        otherImages,
        description,
        productIsbn
    } = req.body;

    // console.log(req.user)
    const sellerId = req.user.user_id


    if(!(name, price, amount, sellerId, description))
    return res.status(402).send("Name, price, amount, sellerId, description are required fields")

    try {
        if(productIsbn){
            const exist = await Product.find({ $and: [{productIsbn:productIsbn , sellerId:sellerId }]})    
            if(exist)return res.status(401).send("Product with the same isbn already exists")

        }  
        const product = await Product.create({ name, price, amount, description, image, otherImages, dimensions, weight, productIsbn })

        if (!product) return res.status(401).send("Product not found")

        return res.status(200).json({
            product,
            message: "Product was added successfully"
        })
    } catch (e) {
        console.log(e)
    }

}