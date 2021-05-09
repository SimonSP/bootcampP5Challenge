'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PassengerHasBaggage', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      passengerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Passengers',
          key: 'id',
        },
      },
      description: {
        type: Sequelize.STRING,
      },
      baggageType: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'BaggageTypes',
          key: 'id',
        },
      },
      baggageStatus: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'BaggageStatuses',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PassengerHasBaggage')
  },
}
