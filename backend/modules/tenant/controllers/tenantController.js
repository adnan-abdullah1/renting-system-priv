const rentDetailsModel = require('../../../models/rentDetails')
const bookingDetailsModel = require('../../../models/bookings')
const userModel = require('../../../models/User')


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

exports.applyForRooom= async (req,res)=>{  
    const query= req.params.id
    const roomDetails = await rentDetailsModel.findById(query)
    const {tenantId,landLordId}=  req.body
     const {firstName} = await userModel.findOne({_id:tenantId})
    
     req.body.roomId = roomDetails._id;
     const appliedRoom = new bookingDetailsModel(req.body)
     appliedRoom.save()
     const message=`${firstName}  is requesting for your room with ${req.params.id} to be approved `

    await  userModel.findOneAndUpdate({_id:landLordId},{$set:{notifications:message}})


     
     res.status(200).json({info:'Your request has been sent for Approval'})
}

exports.checkOut = async(req,res)=>{
    
    const query = {roomId: req.params.id }
    await bookingDetailsModel.findOneAndDelete(query)
    const checkOutRoom =  await rentDetailsModel.findByIdAndUpdate(req.params.id,{$set:{booked:false}},{new:true})
     
    res.status(200).json({info:`Successfully checkedOut`,checkOutRoom})
}