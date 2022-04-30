const UserModel = require('../../../models/User')
    // const RentModel = require('../../../models/rentDetails')
const bookings = require('../../../models/bookings')
const rentDetails = require('../../../models/rentDetails')



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
    //get total available rooms of all land lords
exports.getAvailableRooms = (req, res) => {
    bookings.find({}, (err, doc) => {
        if (err) {
            res.status(409).json(error)
        } else {
            //store total length of documents where ever room status is pending
            //or applied
            var pendingAndApproveRooms = doc.length
                // console.log('doc1length',pendingAndApproveRooms)
            rentDetails.find({}, (err, doc) => {
                if (err) {
                    res.status(409).json(error)
                } else {
                    //totalRooms means total rooms of whole landlords
                    const totalRooms = doc.length
                        // console.log('doc2length',totalRooms)
                        //available rooms => total rooms available of whole landlords
                    const availableRooms = totalRooms - pendingAndApproveRooms
                    res.status(200).json(availableRooms)
                }
            })
        }
    })

}


exports.getOccupiedRooms = async(req, res) => {
    bookings.find({ approvalStatus: "applied" }, (err, doc) => {
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
            select: 'firstName lastName address contact email'
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