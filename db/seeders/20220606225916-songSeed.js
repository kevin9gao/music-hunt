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
        albumArt: "https://jwatt.org/svg/tmp/embedded-sizing/embedded-px-px.png",
        description: "the land of Mr. Demo",
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          name: "DemoMusic",
          artistId: 2,
          albumArt: "https://jwatt.org/svg/tmp/embedded-sizing/embedded-px-px.png",
          description: "the land of Mr. Demo",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "MusicLand",
          artistId: 2,
          albumArt: "https://jwatt.org/svg/tmp/embedded-sizing/embedded-px-px.png",
          description: "the land of Mr. Demo",
          createdAt: new Date(),
          updatedAt: new Date()
        },
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
