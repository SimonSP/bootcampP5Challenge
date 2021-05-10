'use strict'
const moment = require('moment')
const { v4: uuidv4 } = require('uuid')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Baggage', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      passengerHasFlightId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: `PassengerHasFlights`,
          key: `id`,
        },
      },
      description: {
        type: Sequelize.STRING,
      },
      baggageTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'BaggageTypes',
          key: 'id',
        },
      },
      baggageStatusId: {
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
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Passengers', null, {})
    queryInterface.bulkDelete('Flights', null, {})
    queryInterface.bulkDelete('PassengerHasFlights', null, {})
    queryInterface.bulkDelete('Baggage', null, {})
    await queryInterface.dropTable('Baggage')
  },
}
