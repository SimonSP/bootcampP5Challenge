'use strict'
const moment = require('moment')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const defaultFlights = [
      {
        id: 1,
        code: `A1DS1`,
        from: `Chile SCL`,
        to: `Argentina EZE`,
        plannedDepartureDate: moment().subtract(2, `hours`).format(),
        boardingDate: moment().subtract(3, `hours`).format(),
        departureDate: moment().subtract(2, `hours`).format(),
        maxPassengers: 100,
        minPassengers: 50,
      },
      {
        id: 2,
        code: `A1DS2`,
        from: `Chile`,
        to: `Argentina`,
        plannedDepartureDate: moment().add(4, `hours`).format(),
        boardingDate: moment().subtract(3, `hours`).format(),
        maxPassengers: 100,
        minPassengers: 50,
      },
      {
        id: 3,
        code: `A1DS3`,
        from: `Chile`,
        to: `Argentina`,
        plannedDepartureDate: moment().add(2, `hours`).format(),
        boardingDate: moment().add(1, `hours`).format(),
        maxPassengers: 100,
        minPassengers: 50,
      },
      {
        id: 4,
        code: `A1DS4`,
        from: `Chile`,
        to: `Argentina`,
        plannedDepartureDate: moment().subtract(2, `hours`).format(),
        boardingDate: moment().subtract(3, `hours`).format(),
        departureDate: moment().subtract(2, `hours`).format(),
        arrivalDate: moment().format(),
        maxPassengers: 100,
        minPassengers: 50,
      },
      {
        id: 5,
        code: `A1DS5`,
        from: `Chile`,
        to: `Argentina`,
        plannedDepartureDate: moment().add(3, `hours`).format(),
        boardingDate: moment().add(2, `hours`).format(),
        maxPassengers: 100,
        minPassengers: 50,
      },
      {
        id: 6,
        code: `A1DS6`,
        from: `Chile`,
        to: `Argentina`,
        plannedDepartureDate: moment().add(5, `hours`).format(),
        boardingDate: moment().add(4, `hours`).format(),
        maxPassengers: 100,
        minPassengers: 50,
      },
    ]
    await queryInterface.bulkInsert('Flights', defaultFlights)

    await queryInterface.bulkInsert('Passengers', [
      {
        id: 1,
        firstName: `Emilio`,
        lastName: `Pino`,
      },
      {
        id: 2,
        firstName: `Simon`,
        lastName: `Rojas`,
      },
      {
        id: 3,
        firstName: `Javiera`,
        lastName: `Magnasco`,
      },
    ])
    await queryInterface.bulkInsert('PassengerHasFlights', [
      {
        passengerId: 1,
        flightId: 1,
      },
      {
        passengerId: 2,
        flightId: 4,
      },
      {
        passengerId: 1,
        flightId: 5,
      },
    ])
    await queryInterface.bulkInsert('Baggage', [
      {
        uuid: uuidv4(),
        passengerHasFlightId: 1,
        description: `zapatos`,
        baggageTypeId: 1,
        baggageStatusId: 1,
      },
      {
        uuid: uuidv4(),
        passengerHasFlightId: 1,
        description: `cartera`,
        baggageTypeId: 2,
        baggageStatusId: 1,
      },
      {
        uuid: uuidv4(),
        passengerHasFlightId: 1,
        description: `maleta`,
        baggageTypeId: 3,
        baggageStatusId: 1,
      },
      {
        uuid: uuidv4(),
        passengerHasFlightId: 2,
        description: `chaqueta`,
        baggageTypeId: 1,
        baggageStatusId: 2,
      },
      {
        uuid: uuidv4(),
        passengerHasFlightId: 2,
        description: `bolso de mano`,
        baggageTypeId: 2,
        baggageStatusId: 2,
      },
      {
        uuid: uuidv4(),
        passengerHasFlightId: 2,
        description: `maleta`,
        baggageTypeId: 3,
        baggageStatusId: 2,
      },
      {
        uuid: uuidv4(),
        passengerHasFlightId: 3,
        description: `poleron`,
        baggageTypeId: 1,
        baggageStatusId: 1,
      },
      {
        uuid: uuidv4(),
        passengerHasFlightId: 3,
        description: `mochila`,
        baggageTypeId: 2,
        baggageStatusId: 1,
      },
      {
        uuid: uuidv4(),
        passengerHasFlightId: 3,
        description: `maleta`,
        baggageTypeId: 3,
        baggageStatusId: 1,
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete('Passengers', null, {})
    queryInterface.bulkDelete('Flights', null, {})
    queryInterface.bulkDelete('PassengerHasFlights', null, {})
    queryInterface.bulkDelete('Baggage', null, {})
  },
}
