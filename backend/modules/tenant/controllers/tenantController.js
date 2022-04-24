const rentDetailsModel = require('../../../models/rentDetails')
const bookingDetails = require('../../../models/bookings')
const { count } = require('../../../models/rentDetails')
const bookings = require('../../../models/bookings')

exports.getAllRentDetailsTenent = (req, res) => {
    rentDetailsModel.find({}, (err, doc) => {
        if (err) {
            res.send(err)
        } else {
            res.status(200).json(doc)
        }
    })
}


exports.viewRoomDetails = (req, res) => {
    const query = req.params.id
    rentDetailsModel.findById(query, (err, doc) => {
        if (err) {
            res.send(err)
        } else {
            res.status(200).json(doc)
        }
    })
}

exports.tenantBookingDetails = async(req, res) => {
    const query = req.params.id
    const roomDetails = await rentDetailsModel.findById(query)
    req.body.roomId = roomDetails._id;
    const roomBooked = new bookingDetails(req.body)
    roomBooked.save()
    roomDetails.booked = true
    await rentDetailsModel.findByIdAndUpdate(query, roomDetails);
    res.status(200).json({ info: 'Room booked successfully', roomBooked })
}