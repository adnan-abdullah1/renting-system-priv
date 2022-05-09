const UserModel = require('../../../models/User')
const BookingModel = require('../../../models/bookings')


exports.myBookings = async(req, res) => {
    const mineBookings = await BookingModel.find({ tenantId: req.params.id, approvalStatus: 'approved' }).populate({
        path: 'landLordId',
        select: 'firstName lastName address contact email password'
    }).populate({
        path: 'roomId',
        select: 'roomTypes description roomNo pincode district city street state'
    })

    res.status(200).json(mineBookings)

}

exports.changePassword = (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, doc) => {
        if (err) {
            res.json(err)
        } else {
            res.status(200).json(doc)
        }
    })

}

exports.getProfileDetails = (req, res) => {
    UserModel.find({ _id: req.params.id }, (err, doc) => {
        if (err) {
            res.status(409).json(err)
        } else {
            res.status(200).json(doc)
        }
    })



}

exports.editUser = (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, doc) => {
        if (err) {
            res.json(err)
        } else {
            res.status(200).json(doc)
        }
    })
}