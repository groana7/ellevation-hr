const db = require('./database');
const User = require('./models/User');
const Salary = require('./models/Salary');

module.exports = {
  User,
  db,
  Salary
};
