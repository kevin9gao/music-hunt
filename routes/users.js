const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');

const db = require('../db/models')

/* GET users listing. */
router.get('/', asyncHandler(async (req, res, next) => {
  const users = await db.User.findAll();

  res.render('users', {
    users
  });
}));

router.get('/signup', csrfProtection, asyncHandler(async (req, res) => {
  const user = db.User.build();
  res.render('signup-form', {
    title: 'Sign Up',
    user,
    csrfToken: req.csrfToken()
  })
}));

const userValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a username.')
    .isLength({ max: 50 })
    .withMessage('Username cannot be longer than 50 characters.'),
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

router.post('/signup', csrfProtection, asyncHandler(async (req, res, next) => {
  const { username, full_name, password } = req.body;
}))

module.exports = router;
