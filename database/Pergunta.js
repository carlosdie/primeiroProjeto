const sequelize = require('sequelize')
const connection = require('./database')

const Question = connection.define('question',
  {
      titulo: {
          type: sequelize.STRING,
          allowNull: false
      },
      descricao: {
        type: sequelize.TEXT,
        ALLOWnULL: false
      }
  })


Question.sync({force: false}).then(() => {})
module.exports = Question
