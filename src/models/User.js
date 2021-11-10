import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        default: null,
        required: true
    },
    first_name: { 
        type: String, 
        default: null,
        required: false
    },
    last_name: { 
        type: String, 
    },
    email: { 
        type: String, 
        unique: true,
        required: true
    },
    password: { 
        type: String ,
        required: true
    },
    dob: { 
        type: Date ,
        required: true
    },
    role: { 
        type: String ,
        required: true,
        enum: {
            values: ['admin', 'buyer', "seller"],
        }

    },
    token: { 
        type: String 
    },
},{ timestamp: true});

const User = mongoose.model("User", userSchema);
export default User;
