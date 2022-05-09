const express = require('express')
const router = express.Router()

const {changePassword,getProfileDetails,editUser} = require('../controllers/sharedController')

router.patch('/change-password/:id',changePassword)
router.get('/profile-details/:id', getProfileDetails)
router.put('/edit-user/:id',editUser)

module.exports = router