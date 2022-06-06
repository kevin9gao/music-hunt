const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Insert genre collection here');
  });

module.exports = router;
