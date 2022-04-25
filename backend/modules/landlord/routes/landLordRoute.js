const express = require('express')
const router = express.Router()

const {
    addRentDetails,
    deleteRentDetails,
    getallRentDetails,
    editRentDetails,
    notifiLandlord,
    approveBooking


} = require('../controllers/LandLordController')
router.get('/send-notification/:id', notifiLandlord)
router.post('/add-rent-details', addRentDetails)
router.delete('/delete-rent-details/:id', deleteRentDetails)
router.get('/get-all-rent-details/:id', getallRentDetails)
router.put('/edit-rent-details/:id', editRentDetails)
router.put('/approve-booking/:id',approveBooking)

module.exports = router