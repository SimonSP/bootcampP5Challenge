const models = require('../../models')
const Boom = require('@hapi/boom')

async function getBaggage(req, res, next) {
  try {
    const baggage = await models.Baggage.findAll()
    return res.status(200).json({
      success: true,
      data: baggage,
    })
  } catch (error) {
    return next(error)
  }
}

async function getBaggageById(req, res, next) {
  try {
    const { id } = req.query
    const flight = await models.Baggage.findByPk(id)
    return res.status(200).json({
      success: true,
      data: flight,
    })
  } catch (error) {
    return next(error)
  }
}

async function upsertBaggage(req, res, next) {
  try {
    const flight = req.body
    const updatedBaggage = await models.Baggage.upsert(flight)
    return res.status(200).json({
      success: true,
      data: updatedBaggage,
    })
  } catch (error) {
    return next(error)
  }
}

async function deleteBaggage(req, res, next) {
  try {
    const { id } = req.query
    await models.Baggage.destroy({ where: id })
    return res.status(200).json({
      success: true,
    })
  } catch (error) {
    return next(error)
  }
}

module.exports = { getBaggage, getBaggageById, upsertBaggage, deleteBaggage }
