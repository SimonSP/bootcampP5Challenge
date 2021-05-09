const Boom = require(`@hapi/boom`)
function formatError({ message, ...err }, stack, data = {}) {
  const error = { ...err, error: message, statusError: err.error }
  return { ...error, stack }
}
function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    return next(Boom.badImplementation(err))
  }
  return next(err)
}
function errorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload },
  } = err
  const error = formatError(payload, err.stack, err.data)
  res.status(statusCode).json({ success: false, ...error })
}

module.exports = {
  wrapErrors,
  errorHandler,
}
