const express = require('express');
const { asyncHandler, csrfProtection } = require('./utils');
const { check, validationResult } = require('express-validator');
const { Op } = require('sequelize');
const db = require('../db/models');

const router = express.Router();

/* GET home page. */
router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {
  const songs = await db.SongUpvote.findAll();
  const topSongs = [];
  const topUpvotes = [];
  const upvoteMap = {}

  // Create a map of all songs and their upvotes
  for (let song of songs) {
    let songId = `${song.songId}`;

    if (songId in upvoteMap) {
      upvoteMap[songId]++;
    } else {
      upvoteMap[songId] = 1;
    }
  }

  //- Get their keys and values
  const upvoteValues = Object.values(upvoteMap);
  const songIdKeys = Object.keys(upvoteMap);

  // find top 5 most upvoted songs
  for (let i = 0; i < 5; i++) {
    // find max value (highest upvoted song) and its index
    let max = Math.max(...upvoteValues);
    let index = upvoteValues.indexOf(max);

    topSongs.push(songIdKeys.splice(index, 1)[0]);
    topUpvotes.push(upvoteValues.splice(index, 1)[0]);
  }

  let trendingSongs = [];
  // Cannot order by upvotes, therefore for loop finding all in order
  for (let i = 0; i < 5; i++) {
    findSong = await db.Song.findAll({
      where: {
        id: topSongs[i]
      },
      include: [db.User]
    });

    trendingSongs.push(findSong[0]);
  }

  res.render('home', {
    title: 'Music Hunt',
    trendingSongs,
    topUpvotes,
  });
}));

module.exports = router;
