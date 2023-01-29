const Sequelize = require("sequelize")
const connection = require("./database")

const dataResposta = connection.define("dataResposta", {

  data: {
    type: Sequelize.TEXT,
    allowNull: true
  },

  perguntaId: {
    type: Sequelize.TEXT,
    allowNull: true
  }
})

dataResposta.sync({force: false}).then(() => {})
module.exports = dataResposta
