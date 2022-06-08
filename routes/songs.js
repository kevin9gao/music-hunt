const express = require('express');
const { asyncHandler } = require('./utils');
const router = express.Router();
const db = require('../db/models');
// const { User, SongUpvote } = require('../db/models');
// const User = require('../db/models/user');
// const SongUpvote = require('../db/models/SongUpvote');


router.get('/', asyncHandler(async (req, res) => {
    const users = await db.User.findAll();
    const songUpvotes = await db.SongUpvote.findAll();
    const songs = await db.Song.findAll(
        {
            // includes: [songUpvotes]
        }
    );
    // // const songgenres = await db.SongGenre.findAll();

    let count = 0;


    res.render('songs', { songs, users, songUpvotes, count });
}));

router.post('/upvote/:id', async (req, res) => {
    if (req.session.auth) {
        const songId = req.params.id
        const { userId } = req.session.auth

        const songUpvotes = await db.SongUpvote.findAll({
            where: {
                userId,
                songId
            }
        })


        if (!songUpvotes.length) {
            db.SongUpvote.create({
                userId,
                songId
            })
        } else {
            await songUpvotes[0].destroy()
        }
        res.redirect("/songs")


    } else res.redirect("/users/login") // when user is not logged in, this will redirect them to the login page

})


module.exports = router;
