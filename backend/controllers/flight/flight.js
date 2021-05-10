const models = require('../../models')
const Boom = require('@hapi/boom')

async function getFlights(req, res, next) {
  try {
    const flights = await models.Flight.findAll()
    return res.status(200).json({
      success: true,
      data: flights,
    })
  } catch (error) {
    return next(error)
  }
}

module.exports = { getFlights }
