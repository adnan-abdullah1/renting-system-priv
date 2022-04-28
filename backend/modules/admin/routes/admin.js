const express = require('express')
const router = express.Router()

const { getAllLandLords, getAllTenants, getAvailableRooms, updateLandlord, getOccupiedRooms, addLandLord, removeLandLord } = require('../controllers/admin')

router.get('/get-landlord-details', getAllLandLords)
router.get('/get-tenant-details', getAllTenants)

router.get('/get-available-rooms/:id', getAvailableRooms)
router.put('/update-landlord/:id', updateLandlord)
router.get('/get-occupied-rooms', getOccupiedRooms)
router.post('/add-landlord', addLandLord)
router.delete('/remove-landlord/:id', removeLandLord)

module.exports = router;