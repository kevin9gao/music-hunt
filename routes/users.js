const express = require('express');
const router = express.Router();
const db = require('../db/models')

/* GET users listing. */
router.get('/', async(req, res, next) => {
  const users = await db.User.findAll();

  res.render('users', {
    users
  });
});

router.get('/signup', (req, res) => {

});
module.exports = router;
