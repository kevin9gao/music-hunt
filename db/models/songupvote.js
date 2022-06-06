'use strict';
module.exports = (sequelize, DataTypes) => {
  const SongUpvote = sequelize.define('SongUpvote', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER},
    songId: {
      allowNull: false,
      type: DataTypes.INTEGER}
  }, {});
  SongUpvote.associate = function(models) {
    // associations can be defined here
  };
  return SongUpvote;
};
