const router = require('express').Router();
const User = require('../db/models/User.js');

// TODO: SECURE ROUTES
// const forAdmin = (req, res, next) => {
//   if (!req.user || !req.user.isAdmin) {
//     const err = new Error('This page is only available to admins!')
//     err.status = 401
//     return next(err)
//   }
//   next()
// }
// // ie: router.get('/', forAdmin, async (req, res, next) => {

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(err);
  }
});

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router; 