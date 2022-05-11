const express = require('express')
const router = express.Router()

const {
     getAllLandLords,
     getAllTenants,
      getAvailableRooms, 
      updateLandlord,
      getLandLordInfo,
       getOccupiedRooms,
        addLandLord,
         removeLandLord,
          getTenantInfo, 
          getRentInfo,
          removeTenant,
           editTenat,
            addTenant,
            deleteRentInfo,
            editRentInfo,
            editAllTenant,
            pieGraph } = require('../controllers/adminController')

router.get('/get-landlords', getAllLandLords)
router.get('/get-tenants', getAllTenants)

router.get('/get-available-rooms', getAvailableRooms)

router.get('/get-occupied-rooms', getOccupiedRooms)
router.post('/add-landlord', addLandLord)
router.put('/update-landlord/:id', updateLandlord)
router.get('/get-landlord-details',getLandLordInfo)
router.get('/tenant-details',getTenantInfo)

router.delete('/remove-landlord/:id', removeLandLord)
router.post('/add-tenant',addTenant)
router.put('/edit-tenant/:id',editTenat)
router.delete('/remove-tenant/:id',removeTenant)
router.get('/rent-info',getRentInfo)
router.put('/edit-rent-info/:id',editRentInfo)
router.delete('/delete-rent-info/:id',deleteRentInfo)
router.put('/edit-all-tenant/:id',editAllTenant)

router.get('/room-types',pieGraph)
 

module.exports = router;