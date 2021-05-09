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
      from: Sequelize.STRING,
      to: Sequelize.STRING,
      plannedDepartureDate: Sequelize.DATE,
      boardingDate: Sequelize.DATE,
      departureDate: Sequelize.DATE,
      arrivalDate: Sequelize.DATE,
      maxPassengers: Sequelize.INTEGER,
      minPassengers: Sequelize.INTEGER,
    },
    {
      sequelize,
      modelName: 'Flight',
    },
  )
  return Flight
}
