const rentDetailsModel = require('../../../models/rentDetails')
const bookingDetailsModel = require('../../../models/bookings')

exports.getAllRentDetailsTenent = (req, res) => {
    rentDetailsModel.find({}, (err, doc) => {
        if (err) {
            res.send(err)
        } else {
            res.status(200).json({ doc })
        }
    })
}

exports.tenantBookingDetails = async(req, res) => {
    const query = req.params.id //id of room
    const rentDetails = await rentDetailsModel.findById({ _id: query })
    const bookingDetails = await bookingDetailsModel.find({ roomId: query })
        //bookingStaus shows whether room booked or not
        //applied shows wheather tenant applied for room
    if (bookingDetails.applied)
        res.status(200).json({ info: "Some one already applied for room" })
    if (rentDetails.bookingStatus)
        res.status(200).json({ info: "Room is already booked" })
    req.body.roomId = id;
    req.body.applied = true
    const { _id: id } = await rentDetailsModel.findById(query)
    const appliedForRoom = new bookingDetails(req.body)
    appliedForRoom.save()
    res.status(200).json({ info: 'Applied for room successfully', appliedForRoom })
}