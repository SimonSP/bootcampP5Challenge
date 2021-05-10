'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BaggageTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
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
    //INITIAL RECORDS
    await queryInterface.bulkInsert('BaggageTypes', [
      {
        id: 1,
        description: 'Prendas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        description: 'Pequeños',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        description: 'Grandes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },
  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    await queryInterface.bulkDelete('BaggageTypes', {
      id: { [Op.in]: [1, 2, 3] },
    })
    await queryInterface.dropTable('BaggageTypes')
  },
}
