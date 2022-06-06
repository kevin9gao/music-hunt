'use strict';
module.exports = (sequelize, DataTypes) => {
  const CommentUpvote = sequelize.define('CommentUpvote', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    commentId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  CommentUpvote.associate = function(models) {
    // associations can be defined here
  };
  return CommentUpvote;
};
