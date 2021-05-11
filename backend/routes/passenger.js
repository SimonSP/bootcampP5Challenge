const express = require('express')
const router = express.Router()
const {
  getPassengers,
  getPassengerFlights,
  getPassengerById,
  upsertPassenger,
  deletePassenger,
} = require('../controllers/passenger')

router.get(`/`, getPassengers)
router.get(`/flights`, getPassengerFlights)
router.get(`/byId`, getPassengerById)
router.put(`/upsert`, upsertPassenger)
router.delete(`/destroy`, deletePassenger)

module.exports = router
