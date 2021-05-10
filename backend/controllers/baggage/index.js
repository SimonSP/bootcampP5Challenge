const baggageTypeControllers = require(`./baggage`)
const baggageStatusControllers = require(`./baggageStatus`)
const baggageControllers = require(`./baggageType`)

module.exports = {
  ...baggageControllers,
  ...baggageStatusControllers,
  ...baggageTypeControllers,
}
