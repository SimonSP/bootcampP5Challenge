const express = require('express')
const router = express.Router()
const {
  getPassengers,
  getPassengerById,
  upsertPassenger,
  deletePassenger,
} = require('../controllers/passenger')

router.get(`/`, getPassengers)
router.get(`/:id`, getPassengerById)
router.put(`/upsert`, upsertPassenger)
router.delete(`/destroy/:id`, deletePassenger)

module.exports = router
