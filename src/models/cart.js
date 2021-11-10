import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    productName: {
        type: String,
        required: true,
        minlength: 5
    },
    price: {
        type: String,
        required: true,
    },
    productImage: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
        minlength: 5
    },
    storeId: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: false,
        enum: [ "pending", "complete", "failed", "cancelled"]
    },
    paymentReference: {
        type: String,
        required: false,
    },
    shippingStatus: {
        type: String,
        required: false,
        enum: [ "pending", "delivered", "failed", "shipped"]
    }
},{
    timestamps: true,
})

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;