const models = require('../../models')
const Boom = require('@hapi/boom')

async function getBaggageStatuses(req, res, next) {
  try {
    const baggageStatuses = await models.BaggageStatus.findAll()
    return res.status(200).json({
      success: true,
      data: baggageStatuses,
    })
  } catch (error) {
    return next(error)
  }
}

async function getBaggageStatusById(req, res, next) {
  try {
    const { id } = req.query
    const baggageStatus = await models.BaggageStatus.findByPk(id)
    return res.status(200).json({
      success: true,
      data: baggageStatus,
    })
  } catch (error) {
    return next(error)
  }
}

async function upsertBaggageStatus(req, res, next) {
  try {
    const baggageStatus = req.body
    const updatedBaggageStatus = await models.BaggageStatus.upsert(
      baggageStatus,
    )
    return res.status(200).json({
      success: true,
      data: updatedBaggageStatus,
    })
  } catch (error) {
    return next(error)
  }
}

async function deleteBaggageStatus(req, res, next) {
  try {
    const { id } = req.query
    await models.BaggageStatus.destroy({ where: id })
    return res.status(200).json({
      success: true,
    })
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  getBaggageStatuses,
  getBaggageStatusById,
  upsertBaggageStatus,
  deleteBaggageStatus,
}
