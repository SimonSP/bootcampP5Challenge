'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class PassengerHasFlight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PassengerHasFlight.belongsTo(models.Passenger, {
        as: 'passenger',
        foreignKey: 'passengerId',
        target: 'id',
      })
      PassengerHasFlight.belongsTo(models.Flight, {
        as: `flight`,
        foreignKey: `flightId`,
        target: 'id',
      })
      PassengerHasFlight.hasMany(models.Baggage, {
        as: 'baggage',
        foreignKey: 'passengerHasFlightId',
        target: 'id',
      })
    }
  }
  PassengerHasFlight.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'PassengerHasFlight',
    },
  )
  return PassengerHasFlight
}
