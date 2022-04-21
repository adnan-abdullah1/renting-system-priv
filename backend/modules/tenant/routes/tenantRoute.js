const express = require('express')
const router = express.Router()

const {getAllRentDetailsTenent} = require('../controllers/tenantController')

router.get('/get-tenant-rent-details',getAllRentDetailsTenent)

module.exports= router;