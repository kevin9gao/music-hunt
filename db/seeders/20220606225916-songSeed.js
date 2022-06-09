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
        urlLink: "https://open.spotify.com/track/4ClGNWLK9vZMBtO0CpnyOE?si=4000b653fb4a49cd",
        albumArt: "https://w7.pngwing.com/pngs/927/243/png-transparent-music-song-arabesque-art-music-miscellaneous-blue-logo.png",
        description: "the land of Mr. Demo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "DemoMusic",
        artistId: 2,
        urlLink: "https://open.spotify.com/track/7qQcB53fO6DscCmzBo1DXV?si=4e6a0932d0cb4f69",
        albumArt: "https://w7.pngwing.com/pngs/927/243/png-transparent-music-song-arabesque-art-music-miscellaneous-blue-logo.png",
        description: "the land of Mr. Demo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "MusicLand",
        artistId: 2,
        urlLink: "https://open.spotify.com/track/1VaW6rp4Iqkw7E8MSELrlD?si=d670bb1cd54846c2",
        albumArt: "https://w7.pngwing.com/pngs/927/243/png-transparent-music-song-arabesque-art-music-miscellaneous-blue-logo.png",
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
