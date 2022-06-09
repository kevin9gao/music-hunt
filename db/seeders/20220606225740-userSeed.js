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
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'mista.demo@demolition.com',
        username: 'Mr. Demo2',
        full_name: 'Demo Demolitionist',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'mi@demo.com',
        username: 'Mr. Demo3',
        full_name: 'Demo Demolitioner',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'dIssac@gmail.com',
        username: 'iDiaz',
        full_name: 'Issac Diaz',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'kgao@outlook.com',
        username: 'kevkev',
        full_name: 'Kevin Gao',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Wang.Edward@hotmail.com',
        username: 'Edword',
        full_name: 'Edward Wang',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Jokim@yahoo.com',
        username: 'KimJo',
        full_name: 'Jonathan Kim',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'dIssac@gmail.com',
        username: 'Yousir name',
        full_name: 'Jonathan Joestar',
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
