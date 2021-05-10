const baggageTypeControllers = require(`./baggageType`)
const baggageStatusControllers = require(`./baggageStatus`)
const baggageControllers = require(`./baggage`)

module.exports = {
  ...baggageControllers,
  ...baggageStatusControllers,
  ...baggageTypeControllers,
}
