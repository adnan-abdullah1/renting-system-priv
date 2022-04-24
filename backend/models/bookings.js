const mongoose = require('mongoose')
const { Schema } = require('mongoose')


const bookingSchema = new Schema({

    landLordId: {
        type: mongoose.Types.ObjectId,
    },
    tenantId: {
        type: mongoose.Types.ObjectId,
    },
    roomId: {
        type: mongoose.Types.ObjectId,
    },
    bookedAt: {
        type: Date,
        default: Date.now
    },
    checkOutDate: {
        type: Date,
        default: () => new Date(+new Date() + 7 * 24 * 60 * 60 * 1000).toISOString()
    },
    landLordChecked: {
        type: Boolean,
        default: false
    }


})

module.exports = mongoose.model('bookingDetails', bookingSchema)