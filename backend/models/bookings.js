const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const bookingSchema = new Schema({
    landLordId: {
        type: mongoose.Types.ObjectId,
    },
    tenantId: {
        type: mongoose.Types.ObjectId,
    },


})


const User = mongoose.model('User', userSchema)

module.exports = User;



module.exports = mongoose.model('bookingSchema', bookingSchema)