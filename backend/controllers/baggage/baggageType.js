const models = require('../../models')
const Boom = require('@hapi/boom')

async function getBaggageTypes(req, res, next) {
  try {
    const baggageTypes = await models.BaggageType.findAll()
    return res.status(200).json({
      success: true,
      data: { baggageTypes },
    })
  } catch (error) {
    return next(error)
  }
}

async function getBaggageTypeById(req, res, next) {
  try {
    const { id } = req.query
    const baggageType = await models.BaggageType.findByPk(id)
    return res.status(200).json({
      success: true,
      data: baggageType,
    })
  } catch (error) {
    return next(error)
  }
}

async function upsertBaggageType(req, res, next) {
  try {
    const baggageType = req.body
    const updatedBaggageType = await models.BaggageType.upsert(baggageType)
    return res.status(200).json({
      success: true,
      data: updatedBaggageType,
    })
  } catch (error) {
    return next(error)
  }
}

async function deleteBaggageType(req, res, next) {
  try {
    const { id } = req.query
    await models.BaggageType.destroy({ where: id })
    return res.status(200).json({
      success: true,
    })
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  getBaggageTypes,
  getBaggageTypeById,
  upsertBaggageType,
  deleteBaggageType,
}
