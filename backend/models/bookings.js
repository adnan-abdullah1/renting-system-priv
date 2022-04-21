const mongoose = require('mongoose')
const {Schema} = require('mongoose')


const bookingSchema = new Schema({

    landLordId:{
        type: mongoose.Types.ObjectId,
    },
    tenantId:{
        type: mongoose.Types.ObjectId,
    },
    roomId:{
        type: mongoose.Types.ObjectId,
    }
})

module.exports = mongoose.model('bookingDetails', bookingSchema)
