const express = require('express');
const { asyncHandler, csrfProtection } = require('./utils');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const db = require('../db/models');


router.get('/', asyncHandler(async (req, res) => {
    const users = await db.User.findAll();
    const songUpvotes = await db.SongUpvote.findAll();
    const songs = await db.Song.findAll(
        {
            // includes: [songUpvotes]
        }
    );
    let count = 0;
    res.render('songs', { songs, users, songUpvotes, count });
}));

router.post('/upvote/:id', async (req, res) => {
    if (req.session.auth) {
        const songId = req.params.id
        const { userId } = req.session.auth

        const songUpvotes = await db.SongUpvote.findOne({
            where: {
                userId,
                songId
            }
        })
        if (!songUpvotes) {
            db.SongUpvote.create({
                userId,
                songId
            })
        } else {
            await songUpvotes.destroy()
        }
        res.redirect("/songs")

    } else res.redirect("/users/login") // when user is not logged in, this will redirect them to the login page

})


router.get('/new', csrfProtection, (req, res) => {
    const song = db.Song.build()
    res.render("new-song", {
        csrfToken: req.csrfToken(),
        song
    })
})

const songsValidators = [
    check("name")
        .exists({ checkFalsy: true })
        .withMessage("Please enter a name for your song.")
        .isLength({ max: 50 })
        .withMessage("Song name is too long."),
    check("urlLink")
        .exists({ checkFalsy: true })
        .withMessage("Please enter a link for the song")
        .custom(value => {
            if (!value.includes("https://open.spotify.com/track")) {
                return Promise.reject("Must be a spotify link.")
            } else return true
        })
        .custom(async (value) => {
            const user = await db.Song.findOne({ where: { urlLink: value } });
            if (user) {
                return Promise.reject('Song already exists')
            } else return true
        }),
    check("albumArt")
        .custom(value => {
            if (value.endsWith("png") || value.endsWith("jpg") || value.endsWith("jpeg") || value.endsWith("image") || value === '') {
                return true
            } else {
                return Promise.reject("Album Art must be an image url")
            }
        })
]

router.post('/new', csrfProtection, songsValidators, asyncHandler(async (req, res) => {
    let { name, urlLink, albumArt, description } = req.body
    if (req.session.auth) {
        const { userId } = req.session.auth

        if (albumArt === '') {
            albumArt = 'https://w7.pngwing.com/pngs/927/243/png-transparent-music-song-arabesque-art-music-miscellaneous-blue-logo.png'
        }

        const song = db.Song.build({
            name,
            urlLink,
            artistId: userId,
            albumArt,
            description
        })

        const validatorErrors = validationResult(req)

        if (validatorErrors.isEmpty()) {
            await song.save();
            req.session.save(() => res.redirect('/songs'))
        } else {
            const errors = validatorErrors.array().map(error => error.msg);
            res.render('new-song', {
                errors,
                song,
                csrfToken: req.csrfToken()
            })
        }

    } else req.session.save(() => res.redirect('/users/login'))
}))

module.exports = router;
