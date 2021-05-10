const models = require('../../models')
const Boom = require('@hapi/boom')

async function getPassengers(req, res, next) {
  try {
    const passengers = await models.Passenger.findAll()
    return res.status(200).json({
      success: true,
      status: 200,
      data: passengers,
    })
  } catch (error) {
    return next(error)
  }
}

async function getPassengerById(req, res, next) {
  try {
    const { id } = req.query
    const passenger = await models.Passenger.findByPk(id)
    return res.status(200).json({
      success: true,
      data: passenger,
    })
  } catch (error) {
    return next(error)
  }
}

async function upsertPassenger(req, res, next) {
  try {
    const passenger = req.body
    const updatedPassenger = await models.Passenger.upsert(passenger)
    return res.status(200).json({
      success: true,
      data: updatedPassenger,
    })
  } catch (error) {
    return next(error)
  }
}

async function deletePassenger(req, res, next) {
  try {
    const { id } = req.query
    await models.Passenger.destroy({ where: id })
    return res.status(200).json({
      success: true,
    })
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  getPassengers,
  getPassengerById,
  upsertPassenger,
  deletePassenger,
}
