'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      from: {
        type: Sequelize.STRING,
      },
      to: {
        type: Sequelize.STRING,
      },
      plannedDepartureDate: {
        type: Sequelize.DATE,
      },
      boardingDate: {
        type: Sequelize.DATE,
      },
      departureDate: {
        type: Sequelize.DATE,
      },
      arrivalDate: {
        type: Sequelize.DATE,
      },
      maxPassengers: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 100,
      },
      minPassengers: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 50,
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
    await queryInterface.dropTable('Flights')
  },
}
