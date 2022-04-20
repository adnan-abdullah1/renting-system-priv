const express = require('express')
const router = express.Router()

const { addRentDetails, deleteRentDetails, getallRentDetails, editRentDetails } = require('../controllers/LandLordController')
router.post('/add-rent-details', addRentDetails)
router.delete('/delete-rent-details/:id', deleteRentDetails)
router.get('/get-all-rent-details/:id', getallRentDetails)
router.put('/edit-rent-details/:id', editRentDetails)
module.exports = router