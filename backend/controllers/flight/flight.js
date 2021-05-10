const models = require('../../models')
const Boom = require('@hapi/boom')

async function getFlights(req, res, next) {
  try {
    const flights = await models.Flight.findAll()
    return res.json({
      success: true,
      status: 200,
      flights,
    })
  } catch (error) {
    return next(error)
  }
}

module.exports = { getFlights }
