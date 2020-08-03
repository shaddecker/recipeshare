'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Users', [{
        firstname: 'Shad',
        lastname: "Decker",
        username: "shad",
        password: "test",
        email: "shaddecker5@gmail.com"
      }], {});
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
