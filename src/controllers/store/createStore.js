import axios from 'axios';
import Store from '../../models/Store'

export const createStore = async (req, res, next) => {

    if (!req.body) return res.status(500).send("Invalid query parameters")

    const {
        storeName,
        storeOwnerId,
        isRegistered,
        registeredNumber,
        phoneNumber,
        email,
        address,
        city,
        country,
        countryCode
    } = req.body;

    if(!(storeName, storeOwnerId, isRegistered, registeredNumber, phoneNumber, email, address, city, country, countryCode))
    return res.status(402).send("storeName, storeOwnerId, isRegistered, phoneNumber, email,address, city, countryCode, are required fields")

    try {
        const exist = await Product.exists({productIsbn})

        if(exist)return res.status("Product with the same isbn already exists")

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