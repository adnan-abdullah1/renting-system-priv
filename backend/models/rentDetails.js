const mongoose = require('mongoose')
const { Schema } = require('mongoose')


const rentSchema = new Schema({
    image: String,
    legalDocuments: String,
    // images: [{
    //     image: String,
    // }],
    roomTypes: {
        type: String,
    },
    landLordId: {
        type: mongoose.Types.ObjectId,
    },
    description: {
        type: String,

    },
    // legaldocuments: [{
    //     document: String,
    // }],
    pincode: String,
    district: String,
    city: String,
    street: String,
    landmark: String,
    state: String,
    bookingStatus: Boolean,
})


module.exports = mongoose.model('rentDetails', rentSchema)