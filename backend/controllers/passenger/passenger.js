const models = require('../../models')
const { Op } = require('sequelize')
const Boom = require('@hapi/boom')

async function getPassengers(req, res, next) {
  try {
    const passengers = await models.Passenger.findAll({
      include: [
        {
          association: `passengerHasFlights`,
          include: [{ association: `baggage` }, { association: `flights` }],
        },
      ],
    })
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
    const { baggage, code, ...passenger } = req.body
    if (passenger.id) {
      const baggageIds = baggage
        .filter((item) => item.id)
        .map((item) => item.id)
      const baggageToInsert = baggage.filter((item) => !item.id)
      await models.Baggage.destroy({
        where: {
          id: { [Op.notIn]: baggageIds },
          passengerHasFlightId: passenger.id,
        },
      })
      await models.Baggage.bulkCreate(baggageToInsert)

      const updatedPassenger = await models.PassengerHasFlight.findOne({
        where: { id: passenger.id },
        include: [
          { association: `flight` },
          { association: `passenger` },
          { association: `baggage` },
        ],
      })
      return res.status(200).json({
        success: true,
        data: { updatedPassenger },
      })
    }
    const include = [
      {
        association: `passenger`,
      },
      { association: `baggage` },
      { association: `flight` },
    ]
    const { id: flightId } = await models.Flight.findOne({ where: { code } })
    const { id } = await models.PassengerHasFlight.create(
      {
        baggage,
        passenger,
        flightId,
      },
      { include },
    )
    const updatedPassenger = await models.PassengerHasFlight.findOne({
      where: { id },
      include,
    })
    return res.status(200).json({
      success: true,
      data: { updatedPassenger },
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

async function getPassengerFlights(req, res, next) {
  try {
    const passengerFlights = await models.PassengerHasFlight.findAll({
      attributes: [`id`],
      include: [
        { association: `flight` },
        { association: `passenger` },
        { association: `baggage` },
      ],
    })
    return res.status(200).json({
      success: true,
      data: { passengerFlights },
    })
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  getPassengers,
  getPassengerFlights,
  getPassengerById,
  upsertPassenger,
  deletePassenger,
}
