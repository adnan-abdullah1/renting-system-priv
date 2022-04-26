const rentDetailsModel = require('../../../models/rentDetails')
const bookings = require('../../../models/bookings')




 
exports.notifiLandlord = async(req, res) => {
    const query = { landLordId: req.params.id, landLordChecked: false }

    bookings.find(query, (err, doc) => {
        if (err) {
           return  res.send(err)
        } else {
          return  res.status(200).json(doc)
        }
    })
}

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


exports.approveBooking = async(req,res)=>{
  await bookings.findByIdAndUpdate(req.params.id,{$set:{
    approvalStatus:"approved"}})

    res.status(200).json('approved')

}


exports.rejectBooking=async(req,res)=>{
    await bookings.findByIdAndDelete(req.params.id)
    res.status(200).json('Rejected')
}