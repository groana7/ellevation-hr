// FUNCTIONS LOGIC
const Sequelize = require('sequelize');
const db = require('../database');

const Salary = db.define('salary', {
  salary: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Salary;
