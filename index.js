const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database")
const modelquestion = require("./database/Pergunta")
const modelResposta = require("./database/Resposta")


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
app.get("/", (req, res) => {
  modelquestion.findAll({ raw: true, order: [
    ['id','DESC'] // ASC = crescente
  ] }).then(perguntas => {console.log(perguntas)
     res.render("index", { perguntas: perguntas })
    })
   })
// render page question
app.get("/perguntar", (req, res) => {
    res.render("perguntar");
})

// save question in database
app.post("responder", (res, req) => {
  const data = req.params.data;
  const perguntaId = req.params.data;
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

  app.get("/pergunta/:id", (req, res) => {
      var id =  req.params.id;
      modelquestion.findOne({ where: { id: id
      }}).then(resposta  => {
          if(resposta != undefined ) {
              console.log(resposta)
              res.render('paginaPergunta', { resposta: resposta })
            } else {
              res.render('error')
          }
       })
    })

  app.listen(3030, () => { console.log("App rodando!") })
