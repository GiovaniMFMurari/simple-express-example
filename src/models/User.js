const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../database');

const User = connection.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `connection.define` also returns the model
console.log(User === connection.models.User); // true

module.exports = User;