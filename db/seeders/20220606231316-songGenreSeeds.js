'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SongGenres', [
      {
        songId: 1,
        genreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 1,
        genreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('SongGenres', null, {});
  }
};
