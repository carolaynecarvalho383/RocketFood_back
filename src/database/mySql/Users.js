const sequelize = require('sequelize');
const database = require('./index')

const User = database.define('user', {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: sequelize.STRING,
    allowNull: false,
  },
  avatar: {
    type: sequelize.STRING,
    allowNull: true,
  },
  isAdmin: {
    type: sequelize.BOOLEAN,
    allowNull: false,
  },
})

User.sync()

module.exports = User;