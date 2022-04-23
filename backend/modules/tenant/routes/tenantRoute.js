const express = require('express')
const router = express.Router()

const {getAllRentDetailsTenent, tenantBookingDetails,viewRoomDetails} = require('../controllers/tenantController')

router.get('/get-tenant-rent-details',getAllRentDetailsTenent)
router.get('/view-room-details/:id',viewRoomDetails)
router.post('/post-tenant-booking-details/:id',tenantBookingDetails)

module.exports= router; 