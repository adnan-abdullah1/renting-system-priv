const mongoose = require('mongoose')
const { Schema } = require('mongoose')


const rentSchema = new Schema({
    image: String,
    legalDocuments: String,
    // images: [{
    //     image: String,
    // }],
    room_types: {
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
    Street: String,
    landmark: String,
    state: String
})


module.exports = mongoose.model('rentDetails', rentSchema)