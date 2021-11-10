import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    storeName: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    storeOwnerId: {
        type: String,
        required: true,
        trim: true,
    },
    isRegistered: {
        type: Boolean,
        required: true,
    },
    registeredNumber: {
        type: String,
        required: false,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
        minlength: 5
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    countryCode: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const Store = mongoose.model('Store', storeSchema);

export default Store;