const express = require('express')
const router = express.Router()
const {
  getBaggage,
  getBaggageById,
  upsertBaggage,
  deleteBaggage,
  getBaggageAux,
} = require('../controllers/baggage')

router.get(`/`, getBaggage)
router.get('/aux', getBaggageAux)
router.get(`/byId`, getBaggageById)
router.put(`/upsert`, upsertBaggage)
router.delete(`/destroy`, deleteBaggage)

module.exports = router
