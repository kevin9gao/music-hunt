const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const { Sequelize } = require('sequelize');
const db = require('../db/models');
const { sequelize } = require('../db/models');
const { loginUser, logoutUser, restoreUser, requireAuth } = require('./auth');
const { locals } = require('../app');

/* GET users listing. */
router.get('/', asyncHandler(async (req, res, next) => {
  const users = await db.User.findAll({
    include: [db.Song]
  });

  res.render('users', {
    users
  });
}));

router.get('/signup', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('signup-form', {
    user,
    csrfToken: req.csrfToken(),
  });
});

const userValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an email.')
    .isEmail()
    .withMessage('Please provide a valid email.')
    .custom(async (value) => {
      const user = await db.User.findOne({ where: { email: value } });
      if (user) {
        return Promise.reject('Email is already in use.')
      }
    }),
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a username.')
    .isLength({ max: 50 })
    .withMessage('Username cannot be longer than 50 characters.')
    .custom(value => {
      if (value === 'demo') {
        return Promise.reject("Username reserved for demos.")
      } else return true
    })
    .custom(async (value) => {
      const user = await db.User.findOne({ where: { username: value } });
      if (user) {
        return Promise.reject('Username is already in use.')
      } else return true
    }),
  check('full_name')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a name.')
    .isLength({ max: 100 })
    .withMessage('Name cannot be longer than 50 characters.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    })
];

router.post('/signup', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  const { email, username, full_name, password } = req.body;

  const user = await db.User.build({
    email,
    username,
    profilePic: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
    full_name
  })

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    loginUser(req, res, user);
    req.session.save(() => res.redirect('/'));

  } else {
    const errors = validatorErrors.array().map(error => error.msg);
    res.render('signup-form', {
      title: 'Sign Up',
      errors,
      user,
      csrfToken: req.csrfToken()
    })
  }
}));

const loginValidators = [
  check('login')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a username or email.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a password.')
]

router.get('/login', csrfProtection,
  async (req, res) => {
    res.render('login-form', {
      title: "Login",
      csrfToken: req.csrfToken()
    })
  });

router.post('/login', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {

    const { login, password } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);
    let user;

    if (validatorErrors.isEmpty()) {

      if (login.includes('@')) {
        user = await db.User.findOne({ where: { email: login } })
      } else {
        user = await db.User.findOne({ where: { username: login } })
      }

      if (user !== null) {
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

        if (passwordMatch) {
          loginUser(req, res, user);
          return req.session.save(() => res.redirect('/'))
        }
      }
      errors.push("Invalid email or password")
    } else {
      errors = validatorErrors.array().map(error => error.msg)
    }

    res.render('login-form', {
      title: 'Login',
      login,
      errors,
      csrfToken: req.csrfToken()
    })
  })
)

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  req.session.save(() => res.redirect('/users/login'));
})

router.post('/demoUser', asyncHandler(async (req, res) => {
  let demoUser = await db.User.findOne({ where: { username: 'demo' } });
  if (!demoUser) {
    const password = 'demologin';
    const hashedPassword = await bcrypt.hash(password, 10);

    demoUser = await db.User.create({
      email: 'demouser@demo.com',
      username: 'demo',
      full_name: 'Demo Login',
      profilePic: 'https://opengameart.org/sites/default/files/robot-preview.png',
      hashedPassword
    })
  }

  loginUser(req, res, demoUser);
  req.session.save(() => res.redirect('/users'));
}));

router.get('/:id', asyncHandler(async (req, res, next) => {
  const artist = await db.User.findOne({
    where: { username: req.params.id }
  });

  // console.log(user.id);

  const songs = await db.Song.findAll({
    where: {
      artistId: artist.id
    },
  });

  // find artists (users that have songs)
  const artists = await db.Song.findAll({
    attributes: [
      [Sequelize.fn('DISTINCT', Sequelize.col('artistId')), 'artistId'],
    ],
    group: ['artistId'],
  })

  // find random artists - EDGE case if there are less than 3 artists (seeder data will not allow this)
  const randArr = [];
  const max = artists.length -1;
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
  console.log(userArtists)
  res.render('profile', { title: "Profile Page", artist, songs, userArtists }) //remenber to include songUpvotes
}))


router.get('/:id/edit', requireAuth, restoreUser, csrfProtection, asyncHandler(async (req, res, next) => {

  if (res.locals.user.username !== req.params.id) {
    const err = new Error('You don\'t have access.');
    err.status = 403;
    throw err;
  }
  const user = await db.User.findOne({
    where: { username: req.params.id }
  })

  res.render('edit-profile', {
    user,
    csrfToken: req.csrfToken()
  });

}))

router.post('/:id', requireAuth, restoreUser, csrfProtection, asyncHandler(async (req, res, next) => {

  const user = await db.User.findOne({
    where: { username: req.params.id }
  })

  const { profilePic, full_name, biography } = req.body;

  await user.update({
    profilePic,
    full_name, //placeholder until it successfully updates database
    biography
  });

  await user.save();

  // const newUser = await db.User.create({
  //   username: user.username,
  //   hashedPassword: user.hashedPassword,
  //   full_name: 'Isaac',
  // })

  // await user.destroy();

  // user = newUser;

  res.redirect(`/users/${user.username}`)

  // res.status(201).json()

}))

router.get('/')

module.exports = router;
