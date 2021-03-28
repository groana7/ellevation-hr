const db = require('./database');
const User = require('./models/User');
const Salary = require('./models/Salary');

// Create associations between different tables:
User.hasMany(Salary);

module.exports = {
  User,
  db,
  Salary
};
