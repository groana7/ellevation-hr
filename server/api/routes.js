const router = require('express').Router();
const User = require('../db/models/User.js');
const Salary = require('../db/models/Salary.js');
/**
 * PSEUDO CODE FOR ROUTES
 */

/**
 * Employees in the Human Resources department have access to information about all Employees, but don't have access to the information of other Employees in the Human Resources department.
 */
 router.get('/users', async (req, res, next) => {
  // if admin see all users
  // if HR, CANNOT view other HR profiles (userType !== 'HR')
  // eager load for salary history
});

/**
 * ALL USERS
 * Employees can view their own information but do not have access to other Employees’ information.

 */
router.get('/', async (req, res, next) => {
  try {
    // check user is logged in and retrieve their info (req.user.id)
    // if manager, will also view their employees in subArr
    // eager load for salary history
  } catch (error) {
    next(error);
  }
});

/**
 * NOTE: Administrative users of the application manage users and permissions
 * ADMIN SECTION
 */

router.put('/', async (req, res, next) => {});

router.delete('/', async (req, res, next) => {});


/**
 * NOTE: Managers can view and edit information about employees reporting to them.
 * MANAGER SECTION
 */
 router.get('/:id', async (req, res, next) => {
   // findAll where managerId === this logged in user's ID
   // send an array of all their employees
   // eager load for salary history
 });
 router.put('/:id', async (req, res, next) => {
   // if mangerId === this logged in user's ID
 });