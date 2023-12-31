import mongoose from "mongoose";

const User = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String, 
        required: true
    }, 
    role: {
        type: String, 
        required: true
    }
})

export default mongoose.model("User", User)