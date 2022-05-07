const express = require('express')
const router = express.Router()

const {changePassword,getProfileDetails} = require('../controllers/sharedController')

router.patch('/change-password/:id',changePassword)
router.get('/profile-details/:id', getProfileDetails)


module.exports = router