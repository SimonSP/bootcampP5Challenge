const express = require('express')
const router = express.Router()
const {
  getFlights,
  getFlightById,
  validateFlight,
  upsertFlight,
  deleteFlight,
} = require('../controllers/flight')

router.get(`/`, getFlights)
router.get(`/byId`, getFlightById)
router.get(`/validate`, validateFlight)
router.put(`/upsert`, upsertFlight)
router.delete(`/destroy`, deleteFlight)

module.exports = router
