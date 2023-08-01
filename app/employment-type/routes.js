const express = require('express')
const router = express.Router();
const {getEmploymentType} = require('./controllers')

router.get('/api/employment-types', getEmploymentType)


module.exports = router;