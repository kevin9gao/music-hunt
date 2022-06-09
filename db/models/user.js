'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allowNull: false,
      type: DataTypes.STRING(255),
      unique: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    full_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    biography: {
      type: DataTypes.STRING(500)
    },
    profilePic: {
      type: DataTypes.STRING(255)
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Song, {
      foreignKey: 'artistId'
    })
    User.hasMany(models.SongUpvote, {
      foreignKey: 'userId'
    })
    User.hasMany(models.Comment, {
      foreignKey: 'userId'
    })
    User.hasMany(models.CommentUpvote, {
      foreignKey: 'userId'
    })
  };
  return User;
};
