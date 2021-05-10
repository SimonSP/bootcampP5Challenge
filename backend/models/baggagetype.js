'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class BaggageType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BaggageType.hasMany(models.Baggage, {
        as: 'baggage',
        foreignKey: 'baggageTypeId',
        target: 'id',
      })
    }
  }
  BaggageType.init(
    {
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'BaggageType',
    },
  )
  return BaggageType
}
