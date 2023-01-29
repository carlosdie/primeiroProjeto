const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database")
const modelquestion = require("./database/Pergunta")
const modelResponse = require("./database/Resposta")

// database conection
connection.authenticate().then(() => {
        console.log("conected!!")
    }).catch((err)=> {
        console.log(err)
    })

// acionando ejs
app.set('view engine', 'ejs')
app.use(express.static('public'))

//body ft json
app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())

// get question in database
// ASC = crescente
app.get("/", (req, res) => {
      modelquestion.findAll({ raw: true, order: [['id','DESC']] })
        .then(perguntas => {
            res.render("index", { perguntas: perguntas })
            })
          })


// render page question
app.get("/perguntar", (req, res) => {
    res.render("perguntar");
})

// save data
app.post("/salvapergunta", (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    // inserindo dados
    modelquestion.create({
        titulo: title,
        descricao: description
    }).then(() => {
      res.redirect("/")
    })
  })

// response // QUESTION:
app.get("/pergunta/:id", (req, res) => {
      var id =  req.params.id;

      modelquestion.findOne({ where: { id: id
      }}).then(resposta  => {
          if(resposta != undefined ) {
              modelResponse.findAll({
                raw: true,
                where: { perguntaId: resposta.id}
              }).then((result) => {
                res.render('paginaPergunta', {
                   result: result,
                   resposta: resposta
                 })
              })
            } else {
              res.render('error')
          }
       })
    })

// save question in database
app.post("/responder", (req, res) => {
      var  data = req.body.data
      var  perguntaId = req.body.perguntaId

      modelResponse.create({
        data: data,
        perguntaId: perguntaId
      }).then( () => {
        res.redirect("/")
      })
  })

app.listen(3131, () => { console.log("App rodando!") })
