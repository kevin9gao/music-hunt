'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    songId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    Comment.belongsTo(models.Song, {
      foreignKey: 'songId'
    })
    Comment.hasMany(models.CommentUpvote, {
      foreignKey: 'commentId'
    })
  };
  return Comment;
};
