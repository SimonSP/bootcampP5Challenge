const express = require('express')
const router = express.Router()

//IMPORTING SUBROUTERS
const FlightsRouter = require('./flight')
const BaggageRouter = require('./baggage')
const PassengersRouter = require('./passenger')
//USING ROUTERS
router.use('/flight', FlightsRouter)
router.use('/baggage', BaggageRouter)
router.use('/passenger', PassengersRouter)

module.exports = router
