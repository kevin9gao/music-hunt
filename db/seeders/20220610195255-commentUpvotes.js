'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('CommentUpvotes', [
      { userId: 3, commentId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, commentId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, commentId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, commentId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, commentId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, commentId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, commentId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, commentId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 9, commentId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, commentId: 11, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, commentId: 11, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, commentId: 11, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, commentId: 11, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, commentId: 11, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, commentId: 11, createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, commentId: 11, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, commentId: 12, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, commentId: 13, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, commentId: 13, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, commentId: 13, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, commentId: 13, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('CommentUpvotes', null, {});
  }
};
