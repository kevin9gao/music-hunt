'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [
      {
        email: 'mr.demo@demolition.com',
        username: 'Mr. Demo',
        full_name: 'Demo Demolition',
        biography: 'I am a demolitionist',
        profilePic: 'https://static01.nyt.com/images/2020/03/08/magazine/08Mag-Tip-01/08Mag-Tip-01-mediumSquareAt3X.jpg',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'mista.demo@demolition.com',
        username: 'Mr. Demo2',
        full_name: 'Demo Demolition2',
        biography: 'I am a demo man',
        profilePic: 'https://www.fbi.gov/image-repository/decades-old-military-ordnances.jpg/@@images/image/high',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'mi@demo.com',
        username: 'Mr. Demo3',
        full_name: 'Demo Demolition3',
        hashedPassword: 'example-pasword',
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
      return queryInterface.bulkDelete('Users', null, {});
  }
};
