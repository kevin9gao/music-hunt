'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('SongUpvotes', [
      { userId: 1, songId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, songId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, songId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, songId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, songId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, songId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, songId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, songId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, songId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, songId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, songId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, songId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 8, songId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 9, songId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 10, songId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 11, songId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 12, songId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, songId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, songId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, songId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, songId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, songId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, songId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, songId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 9, songId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 12, songId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, songId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, songId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, songId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, songId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, songId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 10, songId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 11, songId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 12, songId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, songId: 7, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, songId: 7, createdAt: new Date(), updatedAt: new Date() },
      { userId: 9, songId: 7, createdAt: new Date(), updatedAt: new Date() },
      { userId: 10, songId: 7, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, songId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, songId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, songId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, songId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, songId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, songId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, songId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 8, songId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 9, songId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 11, songId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 12, songId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, songId: 9, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, songId: 9, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, songId: 9, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, songId: 9, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, songId: 9, createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, songId: 9, createdAt: new Date(), updatedAt: new Date() },
      { userId: 8, songId: 9, createdAt: new Date(), updatedAt: new Date() },
      { userId: 9, songId: 9, createdAt: new Date(), updatedAt: new Date() },
      { userId: 11, songId: 9, createdAt: new Date(), updatedAt: new Date() },
      { userId: 12, songId: 9, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, songId: 10, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, songId: 10, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, songId: 10, createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, songId: 10, createdAt: new Date(), updatedAt: new Date() },
      { userId: 8, songId: 10, createdAt: new Date(), updatedAt: new Date() },
      { userId: 9, songId: 10, createdAt: new Date(), updatedAt: new Date() },
      { userId: 11, songId: 10, createdAt: new Date(), updatedAt: new Date() },
      { userId: 12, songId: 10, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, songId: 11, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, songId: 11, createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, songId: 11, createdAt: new Date(), updatedAt: new Date() },
      { userId: 8, songId: 11, createdAt: new Date(), updatedAt: new Date() },
      { userId: 11, songId: 11, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, songId: 12, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, songId: 12, createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, songId: 12, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, songId: 13, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('SongUpvotes', null, {});
  }
};
