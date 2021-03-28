// FUNCTIONS LOGIC
const Sequelize = require('sequelize');
const db = require('../database');
const User = require('./User')

const Salary = db.define('salary', {
  salary: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
})

User.hasMany(Salary);

module.exports = Salary;