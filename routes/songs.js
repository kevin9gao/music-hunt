const express = require('express');
const { asyncHandler, csrfProtection } = require('./utils');
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('./auth.js')
const { Op } = require('sequelize');
const router = express.Router();
const db = require('../db/models');


router.get('/', asyncHandler(async (req, res) => {
    const songUpvotes = await db.SongUpvote.findAll();
    const songs = await db.Song.findAll(
        {
            include: [db.User]
        }
    );
    let count = 0;
    res.render('songs', { songs, songUpvotes, count });
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
            var upvote = db.SongUpvote.create({
                userId,
                songId
            })
        } else {
            await songUpvotes.destroy()
        }
        res.json({ upvote })

    } else res.redirect("/users/login") // when user is not logged in, this will redirect them to the login page

})


router.get('/upload', csrfProtection, (req, res) => {
    if (req.session.auth) {
        const song = db.Song.build()
        res.render("new-song", {
            csrfToken: req.csrfToken(),
            song
        })
    } else req.session.save(() => res.redirect('/users/login'))
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
}));

router.get('/:name/:id', csrfProtection, asyncHandler(async (req, res) => {
    const songId = req.params.id

    const song = await db.Song.findOne({
        where: {
            id: songId,
            name: req.params.name
        },
        include: [db.User]
    })

    const comments = await db.Comment.findAll({
        where: {
            songId: songId
        },
        order: [
            ['createdAt', 'ASC']
        ],
        include: [db.User]
    })


    if (!song) {
        res.redirect(`/${req.params.name}/${songId}`)
    }

    const relatedSongs = await db.Song.findAll({
        where: {
            artistId: song.artistId,
            name: {
                [Op.ne]: song.name
            }
        }, limit: 5
    })


    const songUpvotes = await db.SongUpvote.findAll();

    res.render('song-page', {
        song,
        relatedSongs,
        comments,
        songUpvotes,
        csrfToken: req.csrfToken(),
    })
}));


router.post('/comments/new', asyncHandler(async (req, res) => {
    const { body, songId, userId, username, profilePic, full_name } = req.body;

    const comment = await db.Comment.build({
        userId,
        songId,
        body,
    });

    await comment.save();

    res.json({ comment, username, profilePic, full_name });
}));

router.put('/comments/:id', asyncHandler(async (req, res) => {
    // console.log(req.body);
    const comment = await db.Comment.findByPk(req.params.id);

    comment.body = req.body.body;
    await comment.save();

    res.json({ message: 'Edit', comment });
}))

router.delete('/comments/:id', asyncHandler(async (req, res) => {
    const comment = await db.Comment.findByPk(req.params.id);
    await comment.destroy();

    res.json({ message: 'Destroy!' })
}))

router.post('/:id/delete', async (req, res) => {
    const song = await db.Song.findByPk(req.params.id)
    const songUpvotes = await db.SongUpvote.findAll({
        where: {
            songId: song.id
        }
    })
    for (let songUpvote of songUpvotes) {
        await songUpvote.destroy();
    }
    await song.destroy();
    req.session.save(() => res.redirect('/songs'))
})


router.get('/:name/:id/edit', csrfProtection, async (req, res) => {
    const song = await db.Song.findByPk(req.params.id, { include: [db.User] })
    res.render("update-song", {
        song,
        csrfToken: req.csrfToken()
    })
})



const songUpdateValidators = [
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

router.post('/:name/:id/edit', csrfProtection, requireAuth, songUpdateValidators, async (req, res) => {
    const song = await db.Song.findByPk(req.params.id, { include: [db.User] })

    if (res.locals.user.username === song.User.username) {
        let { name, urlLink, albumArt, description } = req.body

        await song.update({
            name,
            urlLink,
            albumArt,
            description
        })
        const validatorErrors = validationResult(req)

        if (validatorErrors.isEmpty()) {
            await song.save();
            req.session.save(() => res.redirect('/songs'))
        } else {
            const errors = validatorErrors.array().map(error => error.msg);
            res.render('update-song', {
                errors,
                song,
                csrfToken: req.csrfToken()
            })
        }
    } else req.session.save(() => res.redirect('/'))
})
module.exports = router;
