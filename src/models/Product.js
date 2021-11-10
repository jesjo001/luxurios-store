import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    weight: { type: String, require: false },
    dimensions: [{ width: String, height: String }],
    amount: {
        type: Number,
        required: true,
    },
    image: { type: String, require: false },
    otherImages: { type: Array, require: false },
    sellerId: { type: String, require: true },
    description: { type: String, require: true },
    productIsbn: { type: String, require: false },
}, {
    timestamps: true,
})


const Product = mongoose.model('Product', productSchema);
export default Product;