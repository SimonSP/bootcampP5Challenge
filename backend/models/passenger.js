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
      Passenger.belongsTo(models.Flight, {
        as: 'flight',
        foreignKey: 'flightId',
        target: 'id',
      })
      Passenger.hasMany(models.Baggage, {
        as: 'baggage',
        foreignKey: 'passengerId',
        target: 'id',
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
