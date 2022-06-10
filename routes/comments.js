const express = require('express');
const { asyncHandler, csrfProtection } = require('./utils');
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('./auth.js');
const { Op } = require('sequelize');
const router = express.Router();
const db = require('../db/models');
const e = require('express');


const commentValidators = [
    check("body")
        .exists({ checkFalsy: true })
        .withMessage("Cannot post an empty comment.")
]

router.post('/new', requireAuth, csrfProtection, commentValidators, asyncHandler(async (req, res) => {
    const { body, songId, songName } = req.body;

    const comment = await db.Comment.build({
        userId: res.locals.user.id,
        songId,
        body,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await comment.save();
        res.redirect(`/songs`);
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);

        const song = await db.Song.findOne({
            where: {
                id: songId,
            },
            include: [db.User]
        })

        if (song.name !== songName) {
            res.redirect(`/${songId}/${songName}`);
        }

        const relatedSongs = await db.Song.findAll({
            where: {
                artistId: song.artistId,
                name: {
                    [Op.ne]: song.name
                }
            }, limit: 5
        })
        res.render('song-page', {
            body,
            song,
            relatedSongs,
            errors,
            csrfToken: req.csrfToken(),
        });
    }

}));

module.exports = router;
