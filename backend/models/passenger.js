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
      Passenger.hasMany(models.Baggage, {
        as: 'baggage',
        foreignKey: 'passengerId',
        target: 'id',
      })
    }
  }
  Passenger.init(
    {
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Passenger',
    },
  )
  return Passenger
}
