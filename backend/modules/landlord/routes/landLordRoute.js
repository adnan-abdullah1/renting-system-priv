const express = require('express')
const router = express.Router()

const {
    addRentDetails,
    deleteRentDetails,
    getallRentDetails,
    editRentDetails,
    notifiLandlord,
    approveBooking,
    rejectBooking,
    getBookingDetails,
    getTenantBookingDetails,
    getTotalRooms,
    getAllApprovedRoooms,
    getAllPendingRooms


} = require('../controllers/LandLordController')
router.get('/send-notification/:id', notifiLandlord)
router.post('/add-rent-details', addRentDetails)
router.delete('/delete-rent-details/:id', deleteRentDetails)
router.get('/get-all-rent-details/:id', getallRentDetails)
router.put('/edit-rent-details/:id', editRentDetails)
router.put('/approve-booking/:id',approveBooking)
router.get('/get-booking-details/:id',getBookingDetails)
router.get('/get-tenant-booking-details/:id',getTenantBookingDetails )
router.get('/get-total-rooms/:id',getTotalRooms)
router.get('/get-all-approved-rooms/:id',getAllApprovedRoooms)
router.get('/get-all-pending-rooms/:id',getAllPendingRooms)
router.delete('/reject-booking/:id',rejectBooking)

module.exports = router