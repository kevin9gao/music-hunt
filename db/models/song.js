'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    artistId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    albumArt: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
  };
  return Song;
};
