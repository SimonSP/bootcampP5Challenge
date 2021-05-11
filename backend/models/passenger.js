'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Passenger.hasMany(models.PassengerHasFlight, {
        as: 'passengerHasFlights',
        foreignKey: 'passengerId',
        target: 'id',
      })
      Passenger.belongsToMany(models.Flight, {
        through: models.PassengerHasFlight,
        foreignKey: `passengerId`,
        as: `flights`,
      })
    }
  }
  Passenger.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Passenger',
    },
  )
  return Passenger
}
