const UserModel = require('../../../models/User')
const RentModel = require('../../../models/rentDetails')
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

exports.getAvailableRooms = (req, res) => {
    bookings.find({}, (err, doc) => {
        if (err) {
            res.status(409).json(error)
        } else {

            var pendingAndApproveRooms = doc.length
            rentDetails.find({ landLordId: req.params.id }, (err, doc) => {
                if (err) {
                    res.status(409).json(error)
                } else {
                    //totalRooms means total rooms of particular landlord
                    const totalRooms = doc.length
                    const availableRooms = totalRooms - pendingAndApproveRooms
                    res.status(200).json(availableRooms)
                }
            })
        }
    })

}

exports.updateLandlord = async(req, res) => {
    await UserModel.findOneAndUpdate({ _id: req.params.id }, req.body)
    res.status(200).json({ info: "updated" })

}


exports.getOccupiedRooms = async(req, res) => {
    bookingsModel.find({}, (err, doc) => {
        if (err) {
            res.status(409).json(err)
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

    const emailExists = await User.exists({ email })


    if (emailExists) {
        return res.status(400).json({ message: 'Email already exits' })
    }

    const newUser = new User(req.body)
    newUser.save()

    return res.status(200).json(newUser)

}




exports.removeLandLord = (req, res) => {
    bookingsModel.deleteMany({ landLordId: req.params.id }, (err, doc) => {
        if (err) {
            res.status(409).json(err)
        } else {
            rentModel.deleteMany({ landLordId: req.params.id }, (err, doc) => {
                if (err) {
                    res.status(409).json(err)
                } else {
                    User.deleteMany({ _id: req.params.id }, (err, doc) => {
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