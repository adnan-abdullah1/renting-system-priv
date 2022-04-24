const rentDetailsModel = require('../../../models/rentDetails')
const bookingDetailsModel = require('../../../models/bookings')

exports.getAllRentDetailsTenent= (req,res)=>{
         rentDetailsModel.find({},(err,doc)=>{
             if(err){
                    res.send(err)
             }else{
                 res.status(200).json(doc)
             }
         })
} 


exports.viewRoomDetails = (req,res)=>{
    const query = req.params.id
      rentDetailsModel.findById(query,(err,doc)=>{
        if(err){
            res.send(err)
        }else{
            res.status(200).json(doc)
        }
    })
}

exports.tenantBookingDetails = async (req,res)=>{  
    const query= req.params.id
     const roomDetails = await rentDetailsModel.findById(query)
     
     req.body.roomId = roomDetails._id;
    
     const roomBooked = new bookingDetailsModel(req.body)
     roomBooked.save()
      roomDetails.booked = true
     await rentDetailsModel.findByIdAndUpdate(query,roomDetails);
     res.status(200).json({info:'Room booked successfully',roomBooked,roomDetails})
}

exports.checkOut = async(req,res)=>{
    
    const query = {roomId: req.params.id }
    await bookingDetailsModel.findOneAndDelete(query)
    const checkOutRoom =  await rentDetailsModel.findByIdAndUpdate(req.params.id,{$set:{booked:false}},{new:true})
     
    res.status(200).json({info:`Successfully checkedOut`,checkOutRoom})
}