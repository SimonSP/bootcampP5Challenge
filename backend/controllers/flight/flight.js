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

async function getFlightById(req, res, next) {
  try {
    const { id } = req.query
    const flight = await models.Flight.findByPk(id)
    return res.status(200).json({
      success: true,
      data: flight,
    })
  } catch (error) {
    return next(error)
  }
}

async function upsertFlight(req, res, next) {
  try {
    const flight = req.body
    const updatedFlight = await models.Flight.upsert(flight)
    return res.status(200).json({
      success: true,
      data: updatedFlight,
    })
  } catch (error) {
    return next(error)
  }
}

async function deleteFlight(req, res, next) {
  try {
    const { id } = req.query
    await models.Flight.destroy({ where: id })
    return res.status(200).json({
      success: true,
    })
  } catch (error) {
    return next(error)
  }
}

module.exports = { getFlights, getFlightById, upsertFlight, deleteFlight }
