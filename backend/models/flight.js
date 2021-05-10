'use strict'
const { Model, ForeignKeyConstraintError } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Flight.hasMany(models.Passenger, {
        foreignKey: `flightId`,
        target: 'id',
        as: 'passengers',
      })
    }
  }
  Flight.init(
    {
      code: DataTypes.STRING,
      from: DataTypes.STRING,
      to: DataTypes.STRING,
      plannedDepartureDate: DataTypes.DATE,
      boardingDate: DataTypes.DATE,
      departureDate: DataTypes.DATE,
      arrivalDate: DataTypes.DATE,
      maxPassengers: DataTypes.INTEGER,
      minPassengers: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Flight',
    },
  )
  return Flight
}
