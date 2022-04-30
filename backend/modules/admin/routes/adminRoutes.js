const express = require('express')
const router = express.Router()

const { getAllLandLords, getAllTenants, getAvailableRooms, updateLandlord,getLandLordInfo, getOccupiedRooms, addLandLord, removeLandLord, getTenantInfo, getRentInfo } = require('../controllers/adminController')

router.get('/get-landlords', getAllLandLords)
router.get('/get-tenants', getAllTenants)

router.get('/get-available-rooms', getAvailableRooms)

router.get('/get-occupied-rooms', getOccupiedRooms)
router.post('/add-landlord', addLandLord)
router.put('/update-landlord/:id', updateLandlord)
router.get('/get-landlord-details',getLandLordInfo)
router.get('/tenant-details',getTenantInfo)
router.get('/rent-info',getRentInfo)
router.delete('/remove-landlord/:id', removeLandLord)


module.exports = router;