'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Comments', [
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        userId: 1,
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed.',
        userId: 1,
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Id consectetur purus ut faucibus pulvinar elementum integer.',
        userId: 5,
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Quam quisque id diam vel. Arcu ac tortor dignissim convallis aenean et tortor at. Auctor urna nunc id cursus metus aliquam eleifend mi.',
        userId: 8,
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Enim ut tellus elementum sagittis vitae et leo duis.',
        userId: 1,
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        userId: 3,
        songId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Magna fringilla urna porttitor rhoncus.',
        userId: 5,
        songId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        userId: 1,
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Velit egestas dui id ornare arcu.',
        userId: 8,
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Amet consectetur adipiscing elit ut aliquam purus sit amet.',
        userId: 11,
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Senectus et netus et malesuada fames ac.',
        userId: 3,
        songId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi.',
        userId: 5,
        songId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Fames ac turpis egestas sed tempus urna. Sed faucibus turpis in eu mi.',
        userId: 7,
        songId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Aliquam purus sit amet luctus venenatis lectus.',
        userId: 10,
        songId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.',
        userId: 9,
        songId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Victory?',
        userId: 6,
        songId: 13,
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
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
