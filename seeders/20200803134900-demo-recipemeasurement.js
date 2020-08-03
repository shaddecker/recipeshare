'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('RecipeMeasurements', [
      { measure: 'C (Cup)' },
      { measure: 'T (Tablespoon)' },
      { measure: 'tsp (teaspoon)' },
      { measure: 'pint' },
      { measure: 'gallon' },
      { measure: 'oz (ounces)' },
      { measure: 'Box' },
      { measure: 'Container' },
      { measure: 'Stick' },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
