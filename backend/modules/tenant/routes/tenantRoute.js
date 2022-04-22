const express = require('express')
const router = express.Router()

const { getAllRentDetailsTenent, tenantBookingDetails } = require('../controllers/tenantController')

router.get('/get-tenant-rent-details', getAllRentDetailsTenent)
router.post('/post-tenant-booking-details/:id', tenantBookingDetails)
module.exports = router;