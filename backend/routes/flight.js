const express = require('express')
const router = express.Router()
const {
  getFlights,
  getFlightById,
  upsertFlight,
  deleteFlight,
} = require('../controllers/flight')

router.get(`/`, getFlights)
router.get(`/:id`, getFlightById)
router.put(`/upsert`, upsertFlight)
router.delete(`/destroy/:id`, deleteFlight)

module.exports = router
