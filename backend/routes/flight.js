const express = require('express')
const router = express.Router()
const { getFlights } = require('../controllers/flight')
//IMPORTING SUBROUTERS
//const PassengerRouter = require('./passenger.js')

//USING ROUTERS
//Router.use('/passenger', PassengerRouter)

router.get(`/`, getFlights)

module.exports = router
