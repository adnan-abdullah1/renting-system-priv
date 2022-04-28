const mongoose = require('mongoose')
const { Schema } = require('mongoose')


const rentSchema = new Schema({
    image: [{type:String}],
    legalDocuments: [{type:String}],
    
    roomTypes: {
        type: String,
    },
    landLordId: {
        type: mongoose.Types.ObjectId,
    },
    description: {
        type: String,

    },
   
    // booked: {
    //         type: Boolean,
    //         default: false
    // } ,
    roomNo:{
        type:Number,
        default:0,
    },
    pincode: String,
    district: String,
    city: String,
    street: String,
    landmark: String,
    state: String
})


module.exports = mongoose.model('rentDetails', rentSchema)