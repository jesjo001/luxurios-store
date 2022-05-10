import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const Items = new Schema(
    { 
        productName: {
            type: String,
            required: true, 
        },
        itemPrice: {
            type: String,
            required: true, 
        },
        isbn: {
            type: String,
            required: false, 
        },
        productId: {
            type: String,
            required: true, 
        },
        productImg: {
            type: String,
            required: true, 
        },
        quantity: {
            type: Number,
            required: true, 
        },
        shippingStatus: {
            type: String,
            required: false,
            enum: SHIPPING_STATUS
        },
});

const cartSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    cartItems: {
      type: [Items],
      required: true,
    }
  },
  { timestamps: true }
);



const Cart = mongoose.model('Cart', cartSchema);

export default Cart;