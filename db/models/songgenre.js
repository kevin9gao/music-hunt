'use strict';
module.exports = (sequelize, DataTypes) => {
  const SongGenre = sequelize.define('SongGenre', {
    songId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    genreId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  SongGenre.associate = function(models) {
    // associations can be defined here
  };
  return SongGenre;
};
