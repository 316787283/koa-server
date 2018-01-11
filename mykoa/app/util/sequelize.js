const Sequelize = require('sequelize')
const config = require('../../config/database')
console.log(config.database)
var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
  
    pool: {
        max: config.max,
        min: config.min,
        idle: config.idle
    },

});
module.exports = sequelize