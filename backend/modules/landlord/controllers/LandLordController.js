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
    await bookings.findByIdAndDelete(req.params.id)
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
    approvalStatus:"approved",landLordChecked:'true'}})

    res.status(200).json('approved')

}


exports.rejectBooking=async(req,res)=>{
    await bookings.findByIdAndDelete(req.params.id)
    res.status(200).json('Rejected')
}


exports.getBookingDetails = (req,res)=>{
    const query = {landLordId:req.params.id}     
    bookings.find(query,(err,doc)=>{
        if(err){
            res.status(404).json(err)
        }else{
            res.status(200).json(doc)
        }
    })
}


exports.getTenantBookingDetails = async (req,res)=>{
    // console.log(req.params.body)
    const tenantDetails = await  bookings.find({
        landLordId:req.params.id,approvalStatus:'approved'}).populate({
            path: 'tenantId',
            select: 'firstName address'
        });
    console.log(tenantDetails)
    res.status(200).json(tenantDetails)
}


exports.getTotalRooms = (req,res)=>{
          rentDetailsModel.find({landLordId:req.params.id},(err,doc)=>{
        if(err){
            res.status(409).json(err)
        }else{
            res.status(200).json(doc)
        }
    })
}

exports.getAllApprovedRoooms = (req,res)=>{
            bookings.find({landLordId:req.params.id,approvalStatus:'approved'},(err,doc)=>{
                if(err){
                    res.status(409).json(err)
                }else{
                    res.status(200).json(doc)
                }
            })
}


exports.getAllPendingRooms = async(req,res)=>{
    bookings.find({landLordId:req.params.id,approvalStatus:'pending'},(err,doc)=>{
        if(err){
            res.status(409).json(err)
        }else{
            res.status(200).json(doc)
        }
    })
}