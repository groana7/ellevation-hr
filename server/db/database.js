const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/ellevation-hr', {
  logging: false,
});

module.exports = db;
