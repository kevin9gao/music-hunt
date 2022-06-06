'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SongGenres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      songId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Songs' }
      },
      genreId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Genres' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SongGenres');
  }
};
