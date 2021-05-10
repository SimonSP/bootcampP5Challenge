const models = require('../../models')
const Boom = require('@hapi/boom')

async function getBaggageStatuses(req, res, next) {
  try {
    const flights = await models.BaggageStatus.findAll()
    return res.json({
      success: true,
      status: 200,
      flights,
    })
  } catch (error) {
    return next(error)
  }
}

module.exports = { getBaggageStatuses }
