const csrf = require('csurf');

const asyncHandler = require('express-async-handler');

const csrfProtection = csrf({ cookie: true });

module.exports = { csrfProtection, asyncHandler }
