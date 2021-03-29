const Sequelize = require('sequelize');
const db = require('../database');
const crypto = require('crypto');

// ALL USERS
const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('password');
    },
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('salt');
    },
  },
  userType: {
    type: Sequelize.ENUM('HR', 'MANAGER', 'EMPLOYEE'),
    defaultValue: 'EMPLOYEE',
    allowNull: false,
  },
  salary: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  // NOTE: virtual fields will not appear in our table
  isHR: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.userType === 'HR';
    },
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  vacationBalance: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  annualBonus: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// Create Associations
User.belongsTo(User, { as: 'manager' });
User.hasMany(User, { as: 'employees', foreignKey: 'managerId' });

/**
 * classMethods
 */
User.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64');
};

User.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex');
};

User.findUnmanagedEmployees = () => {
  return User.findAll({
    where: {
      userType: 'EMPLOYEE',
      managerId: null,
    },
  });
};

// NOTE: eager loading, fetching an aliased association
User.findManagerAndEmployees = () => {
  return User.findAll({
    include: {
      model: User,
      as: 'employees',
    },
    where: {
      userType: 'MANAGER',
    },
  });
};

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password();
};

/**
 * hooks
 */
const setSaltAndPassword = (user) => {
  if (user.changed('password')) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password(), user.salt());
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);
User.beforeBulkCreate((users) => {
  users.forEach(setSaltAndPassword);
});

module.exports = User;
