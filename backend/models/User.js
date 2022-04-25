const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const userSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,

    },
    address: {
        type: String,

    },
    password: {
        type: String,


    },
    role: {
        type: String,
        default: "tenant"
    },
    notifications:{
        type:String,
    },
    contact:{
        type:Number,
    },
    

})

const User = mongoose.model('User', userSchema)

module.exports = User;