const UserModel = require('../../../models/User')
    // const RentModel = require('../../../models/rentDetails')
const bookings = require('../../../models/bookings')
const rentDetails = require('../../../models/rentDetails')


exports.getProfileDetails = (req, res) => {
    UserModel.find({ _id: req.params.id }, (err, doc) => {
        if (err) {
            res.status(409).json(error)
        } else {
            res.status(200).json(doc)
        }
    })
}
exports.getAllLandLords = (req, res) => {

    UserModel.find({ role: 'landlord' }, (err, doc) => {
        if (err) {
            res.status(409).json(error)
        } else {
            res.status(200).json(doc)
        }
    })

}

exports.getAllTenants = (req, res) => {

    UserModel.find({ role: 'Tenant' }, (err, doc) => {
        if (err) {
            res.status(409).json(error)
        } else {
            res.status(200).json(doc)
        }
    })

}

exports.getAvailableRooms = (req, res) => {
    bookings.find({}, (err, doc) => {
        if (err) {
            res.status(409).json(error)
        } else {

            var pendingAndApproveRooms = doc.length
                // console.log('doc1length',pendingAndApproveRooms)
            rentDetails.find({}, (err, doc) => {
                if (err) {
                    res.status(409).json(error)
                } else {
                    //totalRooms means total rooms of particular landlord
                    const totalRooms = doc.length
                        // console.log('doc2length',totalRooms)
                    const availableRooms = totalRooms - pendingAndApproveRooms
                    res.status(200).json(availableRooms)
                }
            })
        }
    })

}


exports.getOccupiedRooms = async(req, res) => {
    bookings.find({}, (err, doc) => {
        if (err) {
            res.status(409).json(err)
        } else {
            res.status(200).json(doc)
        }
    })
}

exports.getTenantInfo = async(req, res) => {
    const tenantInfo = await bookings.find({ role: 'Tenant' }).populate({
            path: 'tenantId',
            select: 'firstName lastName address contact email password'
        }

    ).populate({
        path: 'roomId',
        select: 'roomNo'
    })

    res.status(200).json(tenantInfo)

}


exports.getLandLordInfo = (req, res) => {
    UserModel.find({ role: 'landlord' }, (err, doc) => {
        if (err) {
            res.json(err)
        } else {
            res.status(200).json(doc)
        }
    })

}

exports.getRentInfo = (req, res) => {
    rentDetails.find({}, (err, doc) => {
        if (err) {
            res.status(409).json(err)
        } else {
            res.status(200).json(doc)
        }
    }).populate({
        path: 'landLordId',
        select: 'firstName lastName contact'
    })

}



// exports.deleteRentInfo =(req,res)=>{
//     bookings.findOneAndDelete({roomId:req.params.id},(err,doc)=>{
//         if(err){
//             res.json(err)
//         }else{
//                 rentDetails.findByIdAndDelete(req.params.id,(err,doc)=>{
//                     if(err){
//                         res.json(err)
//                     }else{
//                         const {landLordId} = doc
//                         UserModel.findOneAndUpdate( {_id:landLordId},{$inc:{totalRooms:-1,occupiedRooms:-1}},{new:true},(err,doc)=>{
//                             if(err){
//                                 res.json(err)
//                             }else{
//                                 res.status(200).json(doc)
//                             }
//                         })
//                     }
//                 })

//         }
//     })

// }




exports.deleteRentInfo = (req, res) => {
    bookings.findOneAndDelete({ roomId: req.params.id }, (err, doc) => {
        if (err) {
            res.json(err)
        } else {
            rentDetails.findByIdAndDelete(req.params.id, (err, doc) => {
                const { landLordId } = doc
                UserModel.findOneAndUpdate({ _id: landLordId }, { $inc: { totalRooms: -1, occupiedRooms: -1 } }, { new: true }, (err, doc) => {
                    if (err) {
                        res.json(err)
                    } else {
                        console.log('document---->', doc)
                        if (doc.occupiedRooms == -1) {
                            doc.occupiedRooms = 0
                            const user = new UserModel(doc)
                            user.save()
                        }
                        res.status(200).json(doc)
                    }
                })
            })
        }
    })
}

exports.editRentInfo = (req, res) => {
    // const body = req.body
    //  const {landLordId} = body
    //  console.log('landlord------->',landLordId)
    // res.status(200).json(body)
    rentDetails.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
        if (err) {
            res.json(err)
        } else {
            res.status(200).json(doc)
        }
    })
}



exports.addLandLord = async(req, res) => {

    if (!(req.body.email && req.body.password)) {
        return res.status(400).json({ message: 'Email and password not present' })
    }
    const { email, password } = req.body;

    const emailExists = await UserModel.exists({ email })


    if (emailExists) {
        return res.status(400).json({ message: 'Email already exits' })
    }

    const newUser = new UserModel(req.body)
    newUser.save()

    return res.status(200).json(newUser)

}


exports.updateLandlord = async(req, res) => {
    await UserModel.findOneAndUpdate({ _id: req.params.id }, req.body)
    res.status(200).json({ info: "updated" })

}


exports.removeLandLord = (req, res) => {
    bookings.deleteMany({ landLordId: req.params.id }, (err, doc) => {
        if (err) {
            res.status(409).json(err)
        } else {
            rentDetails.deleteMany({ landLordId: req.params.id }, (err, doc) => {
                if (err) {
                    res.status(409).json(err)
                } else {
                    UserModel.deleteMany({ _id: req.params.id }, (err, doc) => {
                        if (err) {
                            res.status(409).json(err)
                        } else {
                            res.status(200).json(`User details with id ${req.params.id} deleted successfully`)
                        }
                    })
                }
            })
        }
    })
}





exports.addTenant = async(req, res) => {

    if (!(req.body.email && req.body.password)) {
        return res.status(400).json({ message: 'Email and password not present' })
    }
    const { email, password } = req.body;

    const emailExists = await UserModel.exists({ email })


    if (emailExists) {
        return res.status(400).json({ message: 'Email already exits' })
    }

    const newUser = new UserModel(req.body)
    newUser.save()

    return res.status(200).json(newUser)

}




exports.editTenat = async(req, res) => {
    await UserModel.findOneAndUpdate({ _id: req.params.id }, req.body)
    res.status(200).json({ info: "updated" })


}










exports.removeTenant = async(req, res) => {

    bookings.find({ tenantId: req.params.id }, (err, doc) => {
        if (err) {
            return res.json(err)
        } else {
            doc.forEach((element) => {
                landLordId = element.landLordId
                UserModel.findOneAndUpdate({ _id: landLordId }, { $inc: { occupiedRooms: -1 } }, (err, doc) => {
                    if (err) {
                        return res.json(err)
                    } else {
                        console.log('deleted landlord')
                    }
                })
            })


        }
    })



    bookings.deleteMany({ tenantId: req.params.id }, (err, doc) => {
        if (err) {
            return res.json(err)
        } else {
            UserModel.findByIdAndDelete(req.params.id, (err, doc) => {
                if (err) {
                    return res.json(err)
                } else {
                    return res.status(200).json('user deleted')
                }

            })
        }
    })




}