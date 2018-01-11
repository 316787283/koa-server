const Sequelize = require('sequelize')

let role = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING(50),
    type: Sequelize.BIGINT,
    status: Sequelize.BIGINT
}

module.exports = role