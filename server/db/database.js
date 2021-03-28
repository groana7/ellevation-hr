const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/ellevation-hr', {
  logging: false 
});

// console.log(db)

module.exports = db;