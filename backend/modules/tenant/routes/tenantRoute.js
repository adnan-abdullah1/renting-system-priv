const express = require('express')
const router = express.Router()

const {getAllRentDetailsTenent, applyForRooom,viewRoomDetails,checkOut, availableForBooking} = require('../controllers/tenantController')



router.get('/get-tenant-rent-details',getAllRentDetailsTenent)
router.get('/view-room-details/:id',viewRoomDetails)
router.post('/apply-for-room/:id',applyForRooom)
router.get('/checkOut-tenant/:id',checkOut)
router.get('/availabe-for-booking/:id',availableForBooking)

module.exports= router; 