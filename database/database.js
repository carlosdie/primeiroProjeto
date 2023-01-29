const sequelize = require('sequelize')

const connection = new sequelize('sistemadecadastro', 'diezito', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;
