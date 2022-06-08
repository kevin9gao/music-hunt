'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Songs', [
        {
        name: "DemoLand",
        artistId: 1,
        albumArt: "https://stream.org/wp-content/uploads/Apocalypse-scene.jpg",
        description: "the land of Mr. Demo",
        createdAt: new Date(),
        updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Songs', null, {});
  }
};
