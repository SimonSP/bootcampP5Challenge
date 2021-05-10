const express = require('express')
const router = express.Router()
const {
  getBaggage,
  getBaggageById,
  upsertBaggage,
  deleteBaggage,
} = require('../controllers/baggage')

router.get(`/`, getBaggage)
router.get(`/:id`, getBaggageById)
router.put(`/upsert`, upsertBaggage)
router.delete(`/destroy/:id`, deleteBaggage)

module.exports = router
