const router = require('express').Router();
const Sequelize = require('sequelize');
const {Op} = require('sequelize');
const User = require('../db/models/User.js');

/**
 * ALL USERS
 * Employees can view their own information but do not have access to other Employees’ information.
 * Route for logged in user.
 */
router.get('/', async (req, res, next) => {
  try {
    // if manager, do we want them to also see a list of their employees?
    const employee = await User.findByPk(req.user.id)
    res.json(employee);
  } catch (error) {
    next(error)
  }
})

/**
 * Employees in the Human Resources department have access to information about all Employees, but don't have access to the information of other Employees in the Human Resources department.
 * Route for viewing all employees.
 */
router.get('/users', async (req, res, next) => {
  try {
    if (!req.user.isAdmin || req.user.userType !== 'HR') {
      const err = new Error('This page is only available to admins!')
      err.status = 401
      return next(err)
    } else {
      if (req.user.userType === 'HR'){
        const users = await User.findAll({
          where: {
            userType: {
              [Op.ne]: 'HR'
            }
          }
        });
        res.json(users);
      } else {
        const users = await User.findAll();
        res.json(users);
      }
    }
  } catch (error) {
    next(error);
  }
});

router.get('/users/:id', async (req, res, next) => {
  try {
    if (!req.user.isAdmin || req.user.userType !== 'HR') {
      const err = new Error('This page is only available to admins!')
      err.status = 401
      return next(err)
    } else {
      if (req.user.userType === 'HR'){
        const users = await User.findAll({
          where: {
            userType: {
              [Op.ne]: 'HR'
            }
          }
        });
        res.json(users);
      } else {
        const foundUser = await User.findByPk(req.params.id);
        res.json(foundUser);
      }
    }
  } catch (error) {
    next(error)
  }
 });

/**
 * NOTE: Administrative users of the application manage users and permissions
 * ADMIN SECTION
 * form on the frontend will only show for Admins
 */
 router.put('/users/:id', async (req, res, next) => {
  try {
    const foundUser = await User.findByPk(req.params.id);
    const updateUser = await foundUser.update(req.body);
    res.json(updateUser);
  } catch (error) {
    next(error)
  }
 });

 router.delete('/users/:id', async (req, res, next) => {
   try {
    const foundUser = await User.findByPk(req.params.id);
    if (!foundUser) {
      res.sendStatus('This user does not exist!');
    } else {
      const deleteUser = await foundUser.destroy(req.body);
      res.sendStatus(204);
      res.json(deleteUser);
    }
   } catch (error) {
     next(error)
   }
 });


// Handling Errors
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});


module.exports = router; 