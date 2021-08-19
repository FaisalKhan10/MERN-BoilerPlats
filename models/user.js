const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        mixlength: 50,
        required: true
    },
    lastname: {
        type: String,
        mixlength: 50,
        required: true
    },
    email: {
        type: String,
        unique: 1,
        trim: true,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    role: {
        type: Number,
        default:0
    },
    token: {
        type:String
    },
    tokenExp: {
        type:Number
    }
    
})

const User = mongoose.model("User", userSchema)

module.exports = { User };