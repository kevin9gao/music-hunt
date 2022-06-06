'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(50),
      unique: true
    }
  }, {});
  Genre.associate = function(models) {
    // associations can be defined here
    Genre.belongsToMany(models.Song, {
      through: 'SongGenre',
      foreignKey: 'genreId',
      otherKey: 'songId'
    })
  };
  return Genre;
};
