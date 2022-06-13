const express = require('express');
const { asyncHandler, csrfProtection } = require('./utils');
const { check, validationResult } = require('express-validator');
const { Sequelize } = require('sequelize');
const db = require('../db/models');
const { sequelize } = require('../db/models');

const router = express.Router();

/* GET home page. */
router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {
  const songUpvotes = await db.SongUpvote.findAll();
  const topSongs = [];
  const topUpvotes = [];
  const upvoteMap = {};
  const upvoteUserIds = []

  // Create a map of all songs and their upvotes
  for (let songUpvote of songUpvotes) {
    let songId = `${songUpvote.songId}`;

    if (songId in upvoteMap) {
      upvoteMap[songId]++;
      upvoteUserIds[songId - 1].push(songUpvote.userId)
    } else {
      upvoteMap[songId] = 1;
      upvoteUserIds.push([songUpvote.userId])
    }
  }

  //- Get their keys and values
  const upvoteValues = Object.values(upvoteMap);
  const songIdKeys = Object.keys(upvoteMap);

  // let topSongsUpvoteUsersIds = []

  console.log(upvoteValues);
  console.log(songIdKeys);


  // find top 5 most upvoted songs
  for (let i = 0; i < 10; i++) {
    // find max value (highest upvoted song) and its index
    let max = Math.max(...upvoteValues);
    let index = upvoteValues.indexOf(max);

    topSongs.push(songIdKeys.splice(index, 1)[0]);
    topUpvotes.push(upvoteValues.splice(index, 1)[0]);
    // topSongsUpvoteUsersIds.push()
  }

  let trendingSongs = [];
  // Cannot order by upvotes, therefore for loop finding all in order
  for (let i = 0; i < 10; i++) {
    findSong = await db.Song.findAll({
      where: {
        id: topSongs[i]
      },
      include: [db.User]
    });

    trendingSongs.push(findSong[0]);
    // trendingSongsUpvoteIds.push()
  }

  // find artists (users that have songs)
  const artists = await db.Song.findAll({
    attributes: [
      [Sequelize.fn('DISTINCT', Sequelize.col('artistId')), 'artistId'],
    ],
    group: ['artistId'],
  })

  // find random artists - EDGE case if there are less than 3 artists (seeder data will not allow this)
  const randArr = [];
  const max = artists.length - 1;
  while (randArr.length < 3) {
    let rand = Math.floor(Math.random() * (max + 1));

    if (!randArr.includes(artists[rand].artistId)) {
      randArr.push(artists[rand].artistId);
    }
  }

  const userArtists = await db.User.findAll({
    where: {
      id: randArr
    },
    order: sequelize.random(),
  })

  // console.log(topUpvotes)

  res.render('home', {
    title: 'Music Hunt',
    trendingSongs,
    topUpvotes,
    songUpvotes,
    userArtists,
  });
}));

router.get('/about', async (req, res) => {
  res.render('about')
})

module.exports = router;
