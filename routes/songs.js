const express = require('express');
const { asyncHandler } = require('./utils');
const router = express.Router();
const db = require('../db/models');
// const { User, SongUpvote } = require('../db/models');
// const User = require('../db/models/user');
// const SongUpvote = require('../db/models/SongUpvote');


router.get('/', asyncHandler(async(req, res) => {
    const users = await db.User.findAll();
    const songUpvotes = await db.SongUpvote.findAll();
    const songs = await db.Song.findAll(
    {
        // includes: [songUpvotes]
    }
    );
    console.log(songs)
    // // const songgenres = await db.SongGenre.findAll();

    let count = 0;


    res.render('songs', {songs, users, songUpvotes, count});
}));

module.exports = router;
