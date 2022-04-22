const bookings = require('../../../models/bookings')
const rentDetailsModel = require('../../../models/rentDetails')

exports.addRentDetails = async(req, res) => {
    const addRoomDetails = new rentDetailsModel(req.body)
    addRoomDetails.save((err, doc) => {
        if (err) {
            res.json(err)
        } else {
            res.status(200).json({ info: 'Details Saved Successfully.' })
        }
    })


}

exports.deleteRentDetails = async(req, res) => {
    await rentDetailsModel.findByIdAndDelete(req.params.id)
    res.status(200).json({ messagae: "Room details deleted Successfully" })
}

exports.getallRentDetails = (req, res) => {
    const query = { landLordId: req.params.id }
    rentDetailsModel.find(query, (err, doc) => {
        if (err) {
            res.send(err)
        } else {
            console.log(doc)
            res.status(200).json(doc)
        }
    })

}

exports.editRentDetails = async(req, res) => {
    await rentDetailsModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({ messagae: "Updated successfully" })
}

exports.showNotification = async(req, res) => {

    const bookings = await bookings.find({ landLordId: req.params.id })
    const rentDetails = await rentDetailsModel.find({ landLordId: req.params.id })

}