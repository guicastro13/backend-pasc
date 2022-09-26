const Sequelize = require('sequelize')
const database = require('./config.js')
const sequelize = new Sequelize(database)

module.exports = sequelize