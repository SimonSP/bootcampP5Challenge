const express = require('express')
const router = express.Router()

//IMPORTING SUBROUTERS
const FlightsRouter = require('./flight')

//USING ROUTERS
router.use('/flight', FlightsRouter)

module.exports = router
