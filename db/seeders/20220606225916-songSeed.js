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
      {
        name: "Kalimba",
        artistId: 2,
        urlLink: "https://open.spotify.com/track/4RZ7Lwj1bivN1payIeOKXp?si=2f20cb877c234920",
        albumArt: "https://f4.bcbits.com/img/a1000081424_16.jpg",
        description: "Mr. Scruff Ninja Tuna! KALIMBA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kalimba",
        artistId: 2,
        urlLink: "https://open.spotify.com/track/4RZ7Lwj1bivN1payIeOKXp?si=2f20cb877c234920",
        albumArt: "https://f4.bcbits.com/img/a1000081424_16.jpg",
        description: "Mr. Scruff Ninja Tuna! KALIMBA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Banksy",
        artistId: 7,
        urlLink: "https://open.spotify.com/track/7qhIVhh8NG2VQ0SnIT8clV?si=a496e16e1f5b4f9a",
        albumArt: "https://assets.phillips.com/image/upload/t_Website_LotDetailMainImage/v1/auctions/EX010818/19_001.jpg",
        description: "Performed by Ninexcix, Written by Job Woo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "SHPRITE",
        artistId: 7,
        urlLink: "https://open.spotify.com/track/1TWfCxeMpNJQpxJXBpFHXF?si=e33223d2a37148ae",
        albumArt: "https://i1.sndcdn.com/artworks-yWjBoYI5u0YUqDXY-7LsBOQ-t500x500.jpg",
        description: "Performed by Ninexcix, Written by Job Woo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "AREA 599",
        artistId: 7,
        urlLink: "https://open.spotify.com/track/1NyKYloLpEgLImPhwSxsXj?si=0c86ad655ff942bc",
        albumArt: "https://m.media-amazon.com/images/I/81E+JmfUqrL._SS500_.jpg",
        description: "Performed by Ninexcix, Written by Job Woo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bohemian Rhapsody",
        artistId: 8,
        urlLink: "https://open.spotify.com/track/7tFiyTwD0nx5a1eklYtX2J?si=78b0f92b498645a9",
        albumArt: "https://m.media-amazon.com/images/I/71tMvc0xDPL._SX355_.jpg",
        description: "A Night At The Opera - Remastered 2011 - November 21, 1975 - 2011 Hollywood Records, Inc.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Don't Stop Me Now",
        artistId: 8,
        urlLink: "https://open.spotify.com/track/7hQJA50XrCWABAu5v6QZ4i?si=4720e26fe1d94244",
        albumArt: "https://upload.wikimedia.org/wikipedia/en/0/06/Queen_Jazz.png",
        description: "Jazz - Remastered 2011 - November 10, 1978 - 2011 Hollywood Records, Inc.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Another One Bites The Dust",
        artistId: 8,
        urlLink: "https://open.spotify.com/track/57JVGBtBLCfHw2muk5416J?si=035debc660bf4e9b",
        albumArt: "https://upload.wikimedia.org/wikipedia/en/1/16/Queen_The_Game.png",
        description: "The Game - Remastered 2011 - June 27, 1980 - 2011 Hollywood Records, Inc.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Under Pressure",
        artistId: 8,
        urlLink: "https://open.spotify.com/track/11IzgLRXV7Cgek3tEgGgjw?si=3342dd1350294922",
        albumArt: "https://upload.wikimedia.org/wikipedia/en/3/3c/Queen_Hot_Space.png",
        description: "Hot Space - Remastered 2011 - May 3, 1982 - 2011 Hollywood Records, Inc.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "We Will Rock You",
        artistId: 8,
        urlLink: "https://open.spotify.com/track/54flyrjcdnQdco7300avMJ?si=1e14fa1179504a79",
        albumArt: "https://upload.wikimedia.org/wikipedia/en/e/ea/Queen_News_Of_The_World.png",
        description: "News Of The World - Remastered 2011 - October 28, 1977 - 2011 Hollywood Records, Inc.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "We Are The Champions",
        artistId: 8,
        urlLink: "https://open.spotify.com/track/7ccI9cStQbQdystvc6TvxD?si=5d1d81b3a51a470f",
        albumArt: "https://upload.wikimedia.org/wikipedia/en/e/ea/Queen_News_Of_The_World.png",
        description: "News Of The World - Remastered 2011 - October 28, 1977 - 2011 Hollywood Records, Inc.",
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
