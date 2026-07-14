const express = require('express')
const router = express.Router() 
const {handleURL , hanleAnalytics } = require('../controler/url')

router.post('/',handleURL)
router.get('/analytics/:shordId',hanleAnalytics)
module.exports = router