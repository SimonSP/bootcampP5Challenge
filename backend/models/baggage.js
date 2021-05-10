'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Baggage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Baggage.belongsTo(models.PassengerHasFlight, {
        foreignKey: 'passengerHasFlightId',
        target: 'id',
        as: 'passengerHasFlight',
      })
      Baggage.belongsTo(models.BaggageType, {
        foreignKey: 'baggageTypeId',
        target: 'id',
        as: 'baggageType',
      })
      Baggage.belongsTo(models.BaggageStatus, {
        foreignKey: 'baggageStatusId',
        target: 'id',
        as: 'baggageStatus',
      })
    }
  }
  Baggage.init(
    {
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Baggage',
    },
  )
  return Baggage
}
